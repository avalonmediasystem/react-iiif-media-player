import React, { Component } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import {
  getChoiceItems,
  getSources,
  getMediaType
} from '../services/iiif-parser';
import manifesto from 'manifesto.js';
import { connect } from 'react-redux';

class MediaElementContainer extends Component {
  state = {
    manifest: this.props.manifest,
    ready: false,
    sources: [],
    mediaType: null,
    canvasIndex: 0,
    error: null
  };

  componentDidMount() {
    const { manifest } = this.state;
    let choiceItems = getChoiceItems(manifest, 0);
    if (choiceItems.length === 0) {
      this.setState({
        error: 'No media choice items found in manifest'
      });
      return;
    }

    const sources = getSources(choiceItems);
    const mediaType = getMediaType(choiceItems);
    this.setState({
      ready: true,
      sources,
      mediaType
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { reload, nextCanvas } = nextProps;
    const { manifest } = prevState;
    if (reload) {
      const canvasIndex = manifesto
        .create(manifest)
        .getSequences()[0]
        .getCanvases()
        .map(c => c.id)
        .indexOf(nextCanvas);
      const choiceItems = getChoiceItems(manifest, canvasIndex);
      if (choiceItems.length === 0) {
        return {
          error: 'No media choice items found in manifest'
        };
      }
      const sources = getSources(choiceItems);
      const mediaType = getMediaType(choiceItems);
      return {
        sources,
        mediaType,
        canvasIndex,
        ready: true
      };
    }
    return null;
  }

  render() {
    const {
      manifest,
      ready,
      sources,
      mediaType,
      canvasIndex,
      error
    } = this.state;
    const options = {};

    if (ready) {
      return (
        <div data-testid="mediaelement">
          <MediaElement
            key={`mediaelement-${canvasIndex}`}
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

const mapStateToProps = state => ({
  reload: state.nav.reload,
  nextCanvas: state.nav.nextCanvas
});

export default connect(mapStateToProps)(MediaElementContainer);
