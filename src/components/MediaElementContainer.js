import React, { useEffect, useState } from 'react';
import MediaElement from '@Components/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '@Components/ErrorMessage';
import { getMediaInfo, getTracks } from '@Services/iiif-parser';

const MediaElementContainer = ({ manifest, canvasIndex }) => {
  console.log('\nMediaElementContainer()');
  // Subscribe to Redux store variable
  //const canvasIndex = useSelector((state) => state.player.canvasIndex);

  // Component state variables
  //const [manifest, setManifest] = useState(null);
  const [ready, setReady] = useState(false);
  const [sources, setSources] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [mediaType, setMediaType] = useState('audio');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (manifest) {
      const { sources, mediaType, error } = getMediaInfo(manifest, canvasIndex);
      console.log('sources', sources);
      console.log('mediaType', mediaType);

      setTracks(getTracks({ manifest }));
      setSources(sources);
      setMediaType(mediaType);
      setError(error);
      error ? setReady(false) : setReady(true);
    }
  }, [manifest]); // Re-run the effect when manifest changes

  if (error) {
    return <ErrorMessage />;
  }

  return ready ? (
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
  ) : null;
};

MediaElementContainer.propTypes = {
  manifest: PropTypes.object,
};

export default MediaElementContainer;
