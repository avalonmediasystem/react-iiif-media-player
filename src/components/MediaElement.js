import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';
import { hasNextSection } from '../services/iiif-parser';
import hlsjs from 'hls.js';
import 'mediaelement';
import '../mediaelement/javascript/plugins/mejs-quality.js';

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
    // Your action when media was successfully loaded
    console.log('Loaded successfully');

    // Action reducer
    this.props.playerInitialized(instance);

    media.addEventListener('ended', ended => {
      if (ended) {
        this.handleEnded();
      }
    });
  }

  error(media) {
    // Your action when media had an error loading
    console.log('Error loading');
  }

  handleEnded() {
    if (hasNextSection(this.props.canvasIndex)) {
      this.props.swapMediaElement(this.props.canvasIndex + 1);
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
        'fullscreen'
      ],
      qualityText: 'Stream Quality'
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
      sourceTags = [],
      tracksTags = [];

    for (let i = 0, total = sources.length; i < total; i++) {
      const source = sources[i];
      sourceTags.push(
        `<source src="${source.src}" type="${source.format}" data-quality="${source.quality}">`
      );
    }

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
  playerInitialized: player => actions.playerInitialized(player),
  swapMediaElement: actions.swapMediaElement
};

const mapStateToProps = state => ({
  player: state.player,
  canvasIndex: state.nav.canvasIndex
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaElement);
