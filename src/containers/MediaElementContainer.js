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
    error: null,
  };

  componentDidMount() {
    const { manifest, canvasIndex } = this.props;
    const { sources, mediaType, error } = getMediaInfo(manifest, canvasIndex);
    const tracks = getTracks();
    this.setState({
      sources,
      mediaType,
      tracks,
      ready: error ? false : true,
      error,
    });
  }

  render() {
    const { manifest, ready, sources, tracks, mediaType, error } = this.state;
    const options = {};

    if (ready) {
      return (
        <div data-testid={`mediaelement`} id="mediaelement">
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
  manifest: PropTypes.object,
};

const mapStateToProps = (state) => ({
  canvasIndex: state.player.canvasIndex,
});

export default connect(mapStateToProps)(MediaElementContainer);
