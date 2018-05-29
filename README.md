# react-iiif-media-player

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Note: This is in active develop mode and not ready for production.  

#### Example usage:
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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
