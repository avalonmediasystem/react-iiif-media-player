import React from 'react';
import { render } from 'react-dom';
import IIIFPlayerWrapper from './components/IIIFPlayerWrapper';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'iiif-explorer/loader';

// Import a local manifest here.
// If included in the 'props' below, it will take precedence over the URI
import iiifManifest from '../../src/json/mahler-symphony-audio';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// A valid IIIF Manifest URI endpoint
const iiifManifestUrl =
  'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/mahler-symphony-3.json';

const props = {
  config: {
    // If you'd like to include any fetch API configuration in the
    // network request for a IIIF Manifest URI, place here
    fetch: {
      options: {
        credentials: 'omit',
      },
    },
  },
  iiifManifest,
  iiifManifestUrl,
};

render(<IIIFPlayerWrapper {...props} />, document.getElementById('root'));
