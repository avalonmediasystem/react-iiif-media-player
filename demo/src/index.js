import React, { Component } from 'react';
import { render } from 'react-dom';

import IIIFPlayer from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-iiif-media-player Demo</h1>
        <div id="avln-iiif-player-root" data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"></div>
        <IIIFPlayer />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
