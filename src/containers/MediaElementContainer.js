import React, { Component } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import IIIFParser from '../services/iiif-parser';
import ErrorMessage from '../components/ErrorMessage';

const iiifParser = new IIIFParser();

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
    const choiceItems = iiifParser.getChoiceItems(manifest);
    this.prepSources(manifest, choiceItems);
  }

  getSources(choiceItems) {
    const sources = choiceItems.map(item => {
      return {
        src: item.id,
        // TODO: Fix this assumption
        type: 'video/mp4'
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
