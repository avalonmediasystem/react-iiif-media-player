import React, { Component } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import { getMediaInfo, getTracks } from '../services/iiif-parser';
import { connect } from 'react-redux';

class MediaElementContainer extends Component {
  state = {
    manifest: this.props.manifest,
    ready: false,
    sources: [],
    tracks: [],
    mediaType: null,
    canvasIndex: this.props.canvasIndex,
    error: null
  };

  static getDerivedStateFromProps(nextProps) {
    const { manifest, canvasIndex, clicked } = nextProps;
    const { sources, mediaType, error } = getMediaInfo(manifest, canvasIndex);
    const tracks = getTracks();
    if (clicked === undefined || clicked) {
      return {
        sources,
        mediaType,
        canvasIndex,
        tracks,
        ready: error ? false : true,
        error
      };
    }
    return null;
  }

  render() {
    const {
      manifest,
      ready,
      sources,
      tracks,
      mediaType,
      canvasIndex,
      error
    } = this.state;
    const options = {};

    if (ready) {
      return (
        <div data-testid={`mediaelement-${canvasIndex}`}>
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
            tracks={JSON.stringify(tracks)}
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
  canvasIndex: state.player.canvasIndex,
  clicked: state.nav.clicked
});

export default connect(mapStateToProps)(MediaElementContainer);
