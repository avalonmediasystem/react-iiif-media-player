import React, { useEffect, useState } from 'react';
import MediaElement from '../components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../components/ErrorMessage';
import { getMediaInfo, getTracks } from '../services/iiif-parser';
import { useSelector } from 'react-redux';

const MediaElementContainer = (props) => {
  // Subscribe to Redux store variable
  const canvasIndex = useSelector((state) => state.player.canvasIndex);

  // Component state variables
  const [manifest, setManifest] = useState(null);
  const [ready, setReady] = useState(false);
  const [sources, setSources] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [mediaType, setMediaType] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setManifest(props.manifest);
    if (manifest) {
      const { sources, mediaType, error } = getMediaInfo(manifest, canvasIndex);
      setTracks(getTracks());
      setSources(sources);
      setMediaType(mediaType);
      setError(error);
      error ? setReady(false) : setReady(true);
    }
  }, [manifest]); // Re-run the effect when manifest changes

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
          options={JSON.stringify({})}
        />
      </div>
    );
  } else if (error) {
    return <ErrorMessage message={error} />;
  } else {
    return null;
  }
};

MediaElementContainer.propTypes = {
  manifest: PropTypes.object,
};

export default MediaElementContainer;
