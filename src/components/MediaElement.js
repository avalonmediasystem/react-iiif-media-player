import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import hlsjs from 'hls.js';
import 'mediaelement';
import '../mediaelement/javascript/plugins/mejs-quality.js';

import {
  playerInitialized,
  registerCaptionChange,
  resetClick,
  setPlayingStatus,
  setCanvasIndex,
} from '../actions';
import { hasNextSection } from '../services/iiif-parser';
import {
  switchMedia,
  createSourceTags,
  createTrackTags,
  handleTracks,
} from '../services/mejs-utility-helper';

// Import stylesheets
import '../mediaelement/stylesheets/mediaelementplayer.css';
import '../mediaelement/stylesheets/plugins/mejs-quality.scss';
import '../mediaelement/stylesheets/mejs-iiif-player-styles.scss';

const MediaElement = (props) => {
  // Subscribe to Redux store variables
  const playerProp = useSelector((state) => state.player);
  const { instance, isPlaying, captionOn, canvasIndex } = playerProp;
  const navProp = useSelector((state) => state.nav);
  const { startTime, clicked } = navProp;
  const manifest = useSelector((state) => state.getManifest.manifest);

  // Create reference for dispatching actions
  const dispatch = useDispatch();

  // Component state variables
  const [cIndex, setCIndex] = useState(canvasIndex);
  const [meJSPlayer, setMEJSPlayer] = useState({
    media: null,
    node: null,
    instance: null,
  });

  // Player related props from MediaElementContainer component
  const {
    controls,
    height,
    id,
    mediaType,
    options,
    poster,
    preload,
    sources,
    tracks,
    width,
  } = props;

  const success = (media, node, instance) => {
    const player = { media, node, instance };
    // Your action when media was successfully loaded
    console.log('Loaded successfully');

    // Action reducer
    dispatch(playerInitialized(instance));

    // Register ended event
    media.addEventListener('ended', (ended) => {
      if (ended) {
        dispatch(resetClick());
        handleEnded(player);
      }
    });

    // Register caption change event
    media.addEventListener('captionschange', (captions) => {
      if (captions.detail.caption !== null) {
        dispatch(registerCaptionChange(true));
      } else {
        dispatch(registerCaptionChange(false));
      }
    });

    media.addEventListener('play', () => {
      dispatch(setPlayingStatus(true));
    });

    media.addEventListener('pause', () => {
      dispatch(setPlayingStatus(false));
    });

    // Set component state
    setMEJSPlayer(player);

    // Set tracks
    handleTracks(instance, media, mediaType, captionOn);

    // Set the playhead at the desired start time
    instance.setCurrentTime(startTime);

    if (isPlaying) {
      instance.play();
    }
  };

  const error = (media) => {
    // Your action when media had an error loading
    console.log('Error loading');
  };

  const handleEnded = (player) => {
    if (hasNextSection(canvasIndex)) {
      dispatch(setCanvasIndex(canvasIndex + 1));

      let newInstance = switchMedia(
        player,
        canvasIndex + 1,
        isPlaying,
        captionOn,
        manifest,
        true
      );

      dispatch(playerInitialized(newInstance));
      setCIndex(cIndex + 1);
    }
  };

  // Equivalent to componentDidMount() lifecycle method
  useEffect(() => {
    const { MediaElementPlayer } = global;

    if (!MediaElementPlayer) {
      return;
    }

    const meConfigs = Object.assign({}, JSON.parse(options), {
      pluginPath: './static/media/',
      success: (media, node, instance) => success(media, node, instance),
      error: (media, node) => error(media, node),
      features: [
        'playpause',
        'current',
        'progress',
        'duration',
        'volume',
        'quality',
        mediaType === 'video' ? 'tracks' : '',
        'fullscreen',
      ],
      qualityText: 'Stream Quality',
      toggleCaptionsButtonWhenOnlyOne: true,
    });

    window.Hls = hlsjs;
    new MediaElementPlayer(id, meConfigs);
  }, []); // Run the effect only at the first render

  // Equivalent getDerivedStateFromProps method responding to canvas changes
  useEffect(() => {
    if (cIndex !== canvasIndex && clicked) {
      let newInstance = switchMedia(
        meJSPlayer,
        canvasIndex,
        isPlaying,
        captionOn,
        manifest,
        false
      );

      dispatch(playerInitialized(newInstance));
      instance.setCurrentTime(startTime);

      setCIndex(canvasIndex);
    }
  }, [canvasIndex]); // Re-run the effect only when canvas changes

  const sourceTags = createSourceTags(JSON.parse(sources));
  const tracksTags = createTrackTags(JSON.parse(tracks));

  const mediaBody = `${sourceTags.join('\n')} ${tracksTags.join('\n')}`;
  const mediaHtml =
    mediaType === 'video'
      ? `<video data-testid="video-element" id="${id}" width="${width}" height="${height}"${
          poster ? ` poster=${poster}` : ''
        }
          ${controls ? ' controls' : ''}${
          preload ? ` preload="${preload}"` : ''
        }>
        ${mediaBody}
      </video>`
      : `<audio data-testid="audio-element" id="${id}" width="${width}" ${
          controls ? ' controls' : ''
        }${preload ? ` preload="${preload}"` : ''}>
        ${mediaBody}
      </audio>`;

  return <div dangerouslySetInnerHTML={{ __html: mediaHtml }} />;
};

MediaElement.propTypes = {
  id: PropTypes.string,
  mediaType: PropTypes.string,
  preload: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  poster: PropTypes.string,
  sources: PropTypes.string,
  options: PropTypes.string,
};

export default MediaElement;
