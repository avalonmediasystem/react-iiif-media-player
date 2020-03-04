import React, { Component } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import manifesto from 'manifesto.js';

class MediaElementContainer extends Component {
  state = {
    manifestUrl: this.props.manifestUrl,
    manifest: this.props.manifest,
    ready: false,
    sources: [],
    error: null
  };

  componentDidMount() {
    const { manifest } = this.state;
    let choiceItems = [];

    try {
      choiceItems = manifesto
        .create(manifest)
        .getSequences()[0]
        .getCanvases()[0]
        .getContent()[0]
        .getBody();
    } catch (e) {}

    this.prepSources(manifest, choiceItems);
  }

  getSources(choiceItems) {
    const sources = choiceItems.map(item => {
      return {
        src: item.id,
        // TODO: make type more generic, possibly use mime-db
        type: 'audio/mp4'
      };
    });
    return sources;
  }

  prepSources(manifest, choiceItems) {
    if (choiceItems.length === 0) {
      this.setState({
        error: 'No media choice items found in manifest'
      });
      return;
    }

    const sources = this.getSources(choiceItems);
    this.setState({
      ready: true,
      sources
    });
  }

  render() {
    const { manifest, ready, sources, error } = this.state;
    const options = {};

    if (ready) {
      return (
        <MediaElement
          id="avln-mediaelement-component"
          mediaType="video"
          preload="auto"
          controls
          width={manifest.width || 480}
          height={manifest.height || 360}
          poster=""
          crossorigin="anonymous"
          sources={JSON.stringify(sources)}
          options={JSON.stringify(options)}
        />
      );
    } else if (error) {
      return <ErrorMessage message={error} />;
    }
    return null;
  }
}

MediaElementContainer.propTypes = {
  manifest: PropTypes.object
};

export default MediaElementContainer;
