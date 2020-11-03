import React, { useEffect, useState } from 'react';
import MediaElement from '../MediaElement/MediaElement';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMediaInfo, getTracks } from '../../services/iiif-parser';
import { useSelector } from 'react-redux';

const MediaElementContainer = ({ manifest }) => {
  // Subscribe to Redux store variable
  const canvasIndex = useSelector((state) => state.player.canvasIndex);

  // Component state variables
  //const [manifest, setManifest] = useState(null);
  //const [ready, setReady] = useState(false);
  //const [sources, setSources] = useState([]);
  //const [tracks, setTracks] = useState([]);
  const [mediaType, setMediaType] = useState('audio');
  const [error, setError] = useState(null);

  const sources = [
    {
      src:
        'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/medium/480Kbps.mp4',
      format: 'audio/mp4',
      quality: 'medium',
    },
    {
      src:
        'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/auto/128Kbps.mp4',
      format: 'audio/mp4',
      quality: 'auto',
    },
    {
      src:
        'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/high/720Kbps.mp4',
      format: 'audio/mp4',
      quality: 'high',
    },
  ];

  const tracks = [
    {
      id:
        'https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt',
      type: 'Text',
      format: 'application/webvtt',
      label: 'subtitles',
    },
  ];

  useEffect(() => {
    if (manifest) {
      //const { sources, mediaType, error } = getMediaInfo(manifest, canvasIndex);
      //setTracks(getTracks());
      //setSources(sources);
      //setMediaType(mediaType);
      // setError(error);
      // error ? setReady(false) : setReady(true);
    }
  }, [manifest]); // Re-run the effect when manifest changes

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
};

MediaElementContainer.propTypes = {
  manifest: PropTypes.object,
};

export default MediaElementContainer;
