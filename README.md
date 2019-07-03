# react-iiif-media-player

A ReactJS component which renders both a MediaelementJS player (http://www.mediaelementjs.com/) and structured navigation from a IIIF 3.0 spec manifest.

## General Usage:

Add the `react-iiif-media-player` component into your ReactJS application via `yarn` or `npm`.

`yarn add react-iiif-media-player`

### Example usage reading a local IIIF Manifest file:

```
import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';
import iiifManifest from '../../src/some-location/your-iiif-manifest.js';

const props = {
  config: {
    // Any fetch configuration you might need to get around CORS issues pulling down a manifest from a URL
    fetch: {
      options: {
        credentials: 'omit'
      }
    }
  },
  iiifManifest,
  iiifManifestUrl: ''
};

render(<Root {...props} />, document.getElementById('root'));
```

`iiifManifestUrl` if present will be used over `iiifManifest`. `iiifManifestUrl` should be a uri for a public IIIF manifest 3.0 json file.

_Note:_ you may experience CORS or CORB errors if running this application locally in development mode, trying to hit an external manifest uri.

#### IIIF 3.0 spec

http://iiif.io/api/presentation/3.0/

## Developing

### Run the application locally

First clone the repository:

`git clone git@github.com:avalonmediasystem/react-iiif-media-player.git`

Install dependencies:

`yarn install`

Run the demo application:

`yarn start`

View the application in a web browser. Visit:

http://localhost:3001/

### Development process

Work on all files located in `/src`, and in development mode you can test your work in the demo application (`/demo/src`). This is what is displayed at http://localhost:3001/.

## Building the package

When you're ready to build the package, run:

`yarn run transpile`

This will create NPM/Yarn package files which can be pushed to the NPM registry.

## Tests

`yarn test`

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
