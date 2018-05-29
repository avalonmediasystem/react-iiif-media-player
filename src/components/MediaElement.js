import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'mediaelement';
import PropTypes from 'prop-types';

// Import stylesheet and shims
import 'mediaelement/build/mediaelementplayer.min.css';

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
  }

  error(media) {
    // Your action when media had an error loading
    console.log('Error loading');
  }

  componentDidMount() {
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const options = Object.assign({}, JSON.parse(this.props.options), {
      pluginPath: './static/media/',
      success: (media, node, instance) => this.success(media, node, instance),
      error: (media, node) => this.error(media, node)
    });

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
      sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
    }

    const mediaBody = `${sourceTags.join('\n')}
				${tracksTags.join('\n')}`,
      mediaHtml =
        props.mediaType === 'video'
          ? `<video id="${props.id}" width="${props.width}" height="${
              props.height
            }"${props.poster ? ` poster=${props.poster}` : ''}
					${props.controls ? ' controls' : ''}${
              props.preload ? ` preload="${props.preload}"` : ''
            }>
					${mediaBody}
				</video>`
          : `<audio id="${props.id}" width="${props.width}" controls>
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
}

const mapDispatchToProps = dispatch => {
  return {
    playerInitialized: player => dispatch(actions.playerInitialized(player))
  };
};

export default connect(null, mapDispatchToProps)(MediaElement);
