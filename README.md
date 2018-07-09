# react-iiif-media-player
A ReactJS component which renders both a MediaelementJS player (http://www.mediaelementjs.com/) and structured navigation from a IIIF 3.0 spec manifest.  

## General Usage:
Add the `react-iiif-media-player` component into your ReactJS application via `yarn` or `npm`.

`yarn add react-iiif-media-player`  or,
`npm install --save react-iiif-media-player`

The component will look for an element of `id="iiif-manifest-url"` and read the manifest url from a data attribute  `data-manifest-url="http://your-manifest-url-here"`

#### Example manifest element

`<div id="iiif-manifest-url" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>`

### Example usage:
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import IIIFPlayer from 'react-iiif-media-player';

class Demo extends Component {
  render() {
    return (
      <div>
        <div id="iiif-manifest-url" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>
        <IIIFPlayer />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
```

`data-manifest-url` should be a uri for a public IIIF manifest 3.0 json file.

#### IIIF 3.0 spec
http://iiif.io/api/presentation/3.0/

#### Example IIIF 3.0 spec manifest
https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json

### Configuration
The vision is to support various configurations on the player itself, and network requests when retrieving a manifest.  For now, the only supported configuration is `credentials` under `fetch`'s `init` configuration object (https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).  Here's an example configuration:

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import IIIFPlayer from 'react-iiif-media-player';

// Configuration for the IIIF Media Player
const config = {
  fetch: {
    options: {
      credentials: 'omit'
    }
  }
};

class Demo extends Component {
  render() {
    return (
      <div>
        <div id="avln-iiif-player-root" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>

        <IIIFPlayer config={config} />

      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
```

### IIIF Manifest Testing
To live test IIIF 3.0 spec manifests, the following Github branch is set up for testing:
https://avalonmediasystem.github.io/avalon-iiif-player/

## Developing

### Run the application locally
First clone the repository:

`git clone git@github.com:avalonmediasystem/react-iiif-media-player.git`

Install dependencies:

`yarn install`

Run the demo application:

`yarn start`  or  `npm run start`

View the application in a web browser.  Visit:

http://localhost:3000/

### Development process
Work on all files located in `/src`, and in development mode you can test your work in the demo application (`/demo/src`).  This is what is displayed at http://localhost:3000/.

## Building the package
When you're ready to build the package, run:

`yarn run build`  or   `npm run build`

This will create NPM/Yarn package files which can be pushed to the NPM registry.  


## Tests
In process of transitioning all tests to Jest. For now, run:

`yarn test:jest`  or  `npm run test:jest`




[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
