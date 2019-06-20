import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';
import iiifManifest from '../../src/json/lunchroom-manners';

const props = {
  config: {
    // Reference supported fetch options at: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    fetch: {
      options: {
        credentials: 'omit'
      }
    }
  },
  iiifManifest,
  iiifManifestUrl:
    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest.json'
};

render(<Root {...props} />, document.getElementById('root'));
