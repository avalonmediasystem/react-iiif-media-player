import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';
/**
 * Import a local manifest here.
 * If included in the 'props' below, it will take precedence over the URI
 */
//import iiifManifest from '../../src/json/manifest-pawpaw-mahler';

// A valid, Cors ready, IIIF Manifest URI endpoint
// If this variable has a value, it will take precedence over 'iiifManifest' local manifest file imported above
const iiifManifestUrl =
  'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest.json';

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
  /* Local manifest goes here */
  //iiifManifest,
  iiifManifestUrl
};

render(<Root {...props} />, document.getElementById('root'));
