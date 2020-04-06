import React, { Component } from 'react';
import Root from '../../../src';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

class IIIFPlayerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iiifmanifest: this.props.iiifManifest
    };
    this.iiifExplorer = React.createRef();
  }

  selectIIIFManifest = manifestURL => {
    const self = this;
    axios.get(manifestURL).then(function(result) {
      self.setState({ iiifmanifest: result.data });
    });
  };

  componentDidMount() {
    const self = this;
    this.iiifExplorer.current.addEventListener('selectManifest', function(e) {
      self.selectIIIFManifest(e.detail.id);
    });
  }

  render() {
    return (
      <div className="iiif-player-demo">
        <Row>
          <Col>
            <div className="player-container">
              <h1>IIIF Player Demo</h1>
              <Root
                config={this.props.config}
                iiifManifest={this.state.iiifmanifest}
                canvasIndex={0}
              />
            </div>
          </Col>
          <Col className="explorer">
            <iiif-explorer
              ref={this.iiifExplorer}
              manifest="https://dlib.indiana.edu/iiif_av/iiif-player-samples/manifest-collections.json"
              copy-enabled="true"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default IIIFPlayerWrapper;
