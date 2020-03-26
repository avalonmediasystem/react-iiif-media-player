import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hlsjs from 'hls.js';
import 'mediaelement';
import '../mediaelement/javascript/plugins/mejs-quality.js';

import {
  playerInitialized,
  swapMediaElement,
  registerCaptionChange,
  navItemClick,
  setUnclick,
  setPlayerStatus,
  setStartTime,
  setCanvasIndex
} from '../actions';
import {
  getMediaInfo,
  getTracks,
  hasNextSection
} from '../services/iiif-parser';

// Import stylesheets
import '../mediaelement/stylesheets/mediaelementplayer.css';
import '../mediaelement/stylesheets/plugins/mejs-quality.scss';
import '../mediaelement/stylesheets/mejs-iiif-player-styles.scss';

class MediaElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  success(media, node, instance) {
    const { startTime, canvasIndex, mediaType, isPlaying } = this.props;
    // Your action when media was successfully loaded
    console.log('Loaded successfully');

    // Action reducer
    this.props.playerInitialized(instance);

    // Register ended event
    media.addEventListener('ended', ended => {
      if (ended) {
        this.props.setUnclick();
        this.handleEnded(node, instance, media);
      }
    });

    // Register caption change event
    media.addEventListener('captionschange', captions => {
      if (captions.detail.caption !== null) {
        this.props.registerCaptionChange(true);
      } else {
        this.props.registerCaptionChange(false);
      }
    });

    media.addEventListener('play', () => {
      this.props.setPlayerStatus(true);
    });

    media.addEventListener('pause', () => {
      this.props.setPlayerStatus(false);
    });

    // Set tracks
    this.handleTracks(instance, media, mediaType);

    // Set the playhead at the desired start time
    instance.setCurrentTime(startTime, this.props.setUnclick());

    if (this.props.isPlaying) {
      instance.play();
    }
  }

  error(media) {
    // Your action when media had an error loading
    console.log('Error loading');
  }

  handleEnded(node, instance, media) {
    const { manifest, canvasIndex } = this.props;
    const { mediaType, sources, error } = getMediaInfo(
      manifest,
      canvasIndex + 1
    );
    if (hasNextSection(canvasIndex) && mediaType === 'video') {
      if (error) {
        return;
      }
      // Clear source and track elements
      node.innerHTML = '';

      // Build sources and tracks
      const sourceTags = this.createSourceTags(sources);
      const tracksTags = this.createTrackTags(getTracks());
      const newChildren = `${sourceTags.join('\n')}${tracksTags.join('\n')}`;

      // Attach the new sources and tracks to video element
      node.innerHTML = newChildren;

      instance.setSrc(sources[0].src);

      // Build features from new souces and tracks
      node.player.buildquality(instance, null, null, media);
      node.player.buildtracks(instance, null, instance.layers, media);

      // Set tracks
      this.handleTracks(instance, media, mediaType);

      this.props.playerInitialized(instance);
      this.props.setCanvasIndex(canvasIndex + 1);

      instance.load();
      instance.play();
    }
  }

  handleTracks(instance, media, mediaType) {
    const { captionOn } = this.props;
    if (
      mediaType === 'video' &&
      media.options.toggleCaptionsButtonWhenOnlyOne
    ) {
      if (captionOn && instance.tracks && instance.tracks.length == 1) {
        instance.setTrack(
          instance.tracks[0].trackId,
          typeof keyboard !== 'undefined'
        );
      }
    }
  }

  createSourceTags(sources) {
    const sourceTags = [];
    for (let i = 0, total = sources.length; i < total; i++) {
      const source = sources[i];
      sourceTags.push(
        `<source src="${source.src}" type="${source.format}" data-quality="${source.quality}" />`
      );
    }
    return sourceTags;
  }

  createTrackTags(tracks) {
    const tracksTags = [];
    for (let i = 0, total = tracks.length; i < total; i++) {
      const track = tracks[i];
      tracksTags.push(
        `<track srclang="en" kind="subtitles" type="${track.format}" src="${track.id}"></track>`
      );
    }
    return tracksTags;
  }

  componentDidMount() {
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const options = Object.assign({}, JSON.parse(this.props.options), {
      pluginPath: './static/media/',
      success: (media, node, instance) => this.success(media, node, instance),
      error: (media, node) => this.error(media, node),
      features: [
        'playpause',
        'current',
        'progress',
        'duration',
        'volume',
        'quality',
        this.props.mediaType === 'video' ? 'tracks' : '',
        'fullscreen'
      ],
      qualityText: 'Stream Quality',
      toggleCaptionsButtonWhenOnlyOne: true
    });

    window.Hls = hlsjs;
    this.setState({ player: new MediaElementPlayer(this.props.id, options) });
  }

  componentWillUnmount() {
    if (this.state.player) {
      this.state.player.remove();
      this.setState({ player: null });
    }
  }

  render() {
    const props = this.props,
      sources = JSON.parse(props.sources),
      tracks = JSON.parse(props.tracks),
      sourceTags = this.createSourceTags(sources),
      tracksTags = this.createTrackTags(tracks);

    const mediaBody = `${sourceTags.join('\n')}
				${tracksTags.join('\n')}`,
      mediaHtml =
        props.mediaType === 'video'
          ? `<video data-testid="video-element" id="${props.id}" width="${
              props.width
            }" height="${props.height}"${
              props.poster ? ` poster=${props.poster}` : ''
            }
					  ${props.controls ? ' controls' : ''}${
              props.preload ? ` preload="${props.preload}"` : ''
            }>
					${mediaBody}
				</video>`
          : `<audio data-testid="audio-element" id="${props.id}" width="${
              props.width
            }" ${props.controls ? ' controls' : ''}${
              props.preload ? ` preload="${props.preload}"` : ''
            }>
					${mediaBody}
				</audio>`;

    return <div dangerouslySetInnerHTML={{ __html: mediaHtml }} />;
  }
}

MediaElement.propTypes = {
  id: PropTypes.string,
  mediaType: PropTypes.string,
  preload: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  poster: PropTypes.string,
  sources: PropTypes.string,
  options: PropTypes.string
};

const mapDispatchToProps = {
  playerInitialized: (player, canvasIndex) =>
    playerInitialized(player, canvasIndex),
  swapMediaElement: canvasIndex => swapMediaElement(canvasIndex),
  registerCaptionChange: captionOn => registerCaptionChange(captionOn),
  navItemClick: url => navItemClick(url),
  setUnclick: () => setUnclick(),
  setPlayerStatus: isPlaying => setPlayerStatus(isPlaying),
  setStartTime: time => setStartTime(time),
  setCanvasIndex: index => setCanvasIndex(index)
};

const mapStateToProps = state => ({
  player: state.player.instance,
  isPlaying: state.player.isPlaying,
  captionOn: state.player.captionOn,
  canvasIndex: state.player.canvasIndex,
  startTime: state.nav.startTime,
  manifest: state.getManifest.manifest
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaElement);
