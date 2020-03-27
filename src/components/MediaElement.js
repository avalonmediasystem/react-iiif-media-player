import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import hlsjs from 'hls.js';
import 'mediaelement';
import '../mediaelement/javascript/plugins/mejs-quality.js';

import {
  playerInitialized,
  registerCaptionChange,
  setUnclick,
  setPlayerStatus,
  setCanvasIndex
} from '../actions';
import { hasNextSection } from '../services/iiif-parser';
import {
  switchMedia,
  createSourceTags,
  createTrackTags,
  handleTracks
} from '../services/mejs-utility-helper';

// Import stylesheets
import '../mediaelement/stylesheets/mediaelementplayer.css';
import '../mediaelement/stylesheets/plugins/mejs-quality.scss';
import '../mediaelement/stylesheets/mejs-iiif-player-styles.scss';

class MediaElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasIndex: this.props.canvasIndex,
      media: null,
      node: null,
      instance: null
    };
  }

  success(media, node, instance) {
    const { startTime, mediaType, captionOn } = this.props;
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
    handleTracks(instance, media, mediaType, captionOn);

    // Set the playhead at the desired start time
    instance.setCurrentTime(startTime, this.props.setUnclick());

    if (this.props.isPlaying) {
      instance.play();
    }
    this.setState({ media, node, instance });
  }

  error(media) {
    // Your action when media had an error loading
    console.log('Error loading');
  }

  handleEnded(node, instance, media) {
    const { canvasIndex } = this.props;
    if (hasNextSection(canvasIndex)) {
      this.props.setCanvasIndex(canvasIndex + 1);

      let newInstance = switchMedia(media, node, instance, this.props, true);

      this.props.playerInitialized(newInstance);

      this.setState({ canvasIndex: canvasIndex + 1 });
    }
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

  static getDerivedStateFromProps(nextProps, prevState) {
    const { clicked, canvasIndex } = nextProps;
    if (prevState.canvasIndex !== canvasIndex && clicked) {
      const { media, node, instance } = prevState;
      let newInstance = switchMedia(media, node, instance, nextProps, false);

      nextProps.playerInitialized(newInstance);

      return { canvasIndex: nextProps.canvasIndex };
    }
    return null;
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
      sourceTags = createSourceTags(sources),
      tracksTags = createTrackTags(tracks);

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
  registerCaptionChange: captionOn => registerCaptionChange(captionOn),
  setUnclick: () => setUnclick(),
  setPlayerStatus: isPlaying => setPlayerStatus(isPlaying),
  setCanvasIndex: index => setCanvasIndex(index)
};

const mapStateToProps = state => ({
  player: state.player.instance,
  isPlaying: state.player.isPlaying,
  captionOn: state.player.captionOn,
  canvasIndex: state.player.canvasIndex,
  startTime: state.nav.startTime,
  manifest: state.getManifest.manifest,
  clicked: state.nav.clicked
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaElement);
