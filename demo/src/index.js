import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';

// Import a local manifest here.
// If included in the 'props' below, it will take precedence over the URI
import iiifManifest from '../../src/json/mahler-symphony-video';

// A valid IIIF Manifest URI endpoint
const iiifManifestUrl =
  'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/mahler-symphony-3.json';

const props = {
  config: {
    // If you'd like to include any fetch API configuration in the
    // network request for a IIIF Manifest URI, place here
    fetch: {
      options: {
        credentials: 'omit'
      }
    }
  },
  iiifManifest,
  iiifManifestUrl
};

render(<Root {...props} />, document.getElementById('root'));
