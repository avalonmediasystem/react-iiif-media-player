# react-iiif-media-player

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Note: This is in active develop mode and not ready for production.

### Instructions
Import the root component from `react-iiif-media-player`, and place somewhere in your React application.  The imported component will look for a `div` with the following attributes on which to mount itself to, rendering a MediaelementJS player (http://www.mediaelementjs.com/) and any defined IIIF `structures []` navigation links found in the IIIF manifest.

`<div id="avln-iiif-player-root" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>`

`data-manifest-url` should be a uri for a public IIIF manifest 3.0 json file.

#### Sample IIIF 3.0 spec manifest
https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json


### Example usage:
```
import React, { Component } from 'react';
import { render } from 'react-dom';
import IIIFPlayer from 'react-iiif-media-player';

class Demo extends Component {
  render() {
    return (
      <div>
        <div id="avln-iiif-player-root" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>
        <IIIFPlayer />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
```

### IIIF Manifest Testing
To live test IIIF 3.0 spec manifests, the following Github branch is set up for testing:
https://avalonmediasystem.github.io/avalon-iiif-player/


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
