import React, { Component } from 'react';
import Root from '../../../src';
import { Container } from 'react-bootstrap';
import SourceChooser from './SourceChooser';
import axios from 'axios';

class IIIFPlayerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iiifmanifest: this.props.iiifManifest
    };
  }

  selectIIIFManifest = manifestURL => {
    const self = this;
    axios.get(manifestURL).then(function(result) {
      self.setState({ iiifmanifest: result.data });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <h1>IIIF Player Demo</h1>
          <SourceChooser getManifest={this.selectIIIFManifest}></SourceChooser>
          <Root
            config={this.props.config}
            iiifManifest={this.state.iiifmanifest}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default IIIFPlayerWrapper;
