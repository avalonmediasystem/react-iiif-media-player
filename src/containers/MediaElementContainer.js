import React, { Component } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import manifesto from 'manifesto.js';

class MediaElementContainer extends Component {
  state = {
    manifest: this.props.manifest,
    ready: false,
    sources: [],
    mediaType: null,
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

    this.prepSources(choiceItems);
  }

  getSources(choiceItems) {
    const sources = choiceItems.map(item => {
      return {
        src: item.id,
        // TODO: make type more generic, possibly use mime-db
        format: item.getFormat().value
      };
    });
    return sources;
  }

  getMediaType(choiceItems) {
    let allTypes = choiceItems.map(item => item.getType().value);
    let uniqueTypes = allTypes.filter((t, index) => {
      return allTypes.indexOf(t) === index;
    });
    if (uniqueTypes.length === 1) {
      return uniqueTypes[0];
    }
    // Default type if there are different types
    return 'audio';
  }

  prepSources(choiceItems) {
    if (choiceItems.length === 0) {
      this.setState({
        error: 'No media choice items found in manifest'
      });
      return;
    }

    const sources = this.getSources(choiceItems);
    const mediaType = this.getMediaType(choiceItems);
    this.setState({
      ready: true,
      sources,
      mediaType
    });
  }

  render() {
    const { manifest, ready, sources, mediaType, error } = this.state;
    const options = {};

    if (ready) {
      return (
        <div data-testid="mediaelement">
          <MediaElement
            id="avln-mediaelement-component"
            mediaType={mediaType}
            preload="auto"
            controls
            width={manifest.width || 480}
            height={manifest.height || 360}
            poster=""
            crossorigin="anonymous"
            sources={JSON.stringify(sources)}
            options={JSON.stringify(options)}
          />
        </div>
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
