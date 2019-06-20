import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';

const props = {
  config: {
    // Reference supported fetch options at: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    fetch: {
      options: {
        // credentials: 'omit',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json'
        // },
        // mode: 'no-cors'
      }
    }
  },
  iiifManifestUrl:
    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest.json'
};

render(<Root {...props} />, document.getElementById('root'));
