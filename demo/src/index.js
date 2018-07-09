import React, { Component } from 'react';
import { render } from 'react-dom';
import IIIFPlayer from '../../src';

// Configuration for the IIIF Media Player
// TODO:
// See supporting config options at: (url for documentation goes here)
const config = {
  // Reference supported fetch options at: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
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
        <h1>react-iiif-media-player Demo</h1>
        <div
          id="iiif-manifest-url"
          data-manifest-url="https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json"
        />
        <IIIFPlayer config={config} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
