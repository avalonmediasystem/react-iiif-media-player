import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import hlsjs from 'hls.js';
import 'mediaelement';
import '../../mediaelement/javascript/plugins/mejs-quality.js';

// Import stylesheets
import '../../mediaelement/stylesheets/mediaelementplayer.css';
import '../../mediaelement/stylesheets/plugins/mejs-quality.scss';
import '../../mediaelement/stylesheets/mejs-iiif-player-styles.scss';

import {
  createSourceTags,
  createTrackTags,
} from '../../services/mejs-utility-helper';

const MediaElement = ({
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
}) => {
  const [player, setPlayer] = useState();

  const success = (media, node, instance) => {
    const player = { media, node, instance };
    // Your action when media was successfully loaded
    console.log('Loaded successfully');
  };

  const error = (media) => {
    // Your action when media had an error loading
    console.log('Error loading');
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
    setPlayer(new MediaElementPlayer(id, meConfigs));
  }, []);

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
