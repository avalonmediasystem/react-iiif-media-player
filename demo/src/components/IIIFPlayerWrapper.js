import React, { Component } from 'react';
import Root from '../../../src';
import { Container, Col, Row } from 'react-bootstrap';
import SourceChooser from './SourceChooser';
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
      console.log(e.detail.id);
      self.selectIIIFManifest(e.detail.id);
    });
  }

  render() {
    return (
      <div className="iiif-player-demo">
        <h1>IIIF Player Demo</h1>
        <Row>
          <Col>
            <Root
              config={this.props.config}
              iiifManifest={this.state.iiifmanifest}
            />
          </Col>
          {/* <SourceChooser getManifest={this.selectIIIFManifest}></SourceChooser> */}
          <Col className="explorer">
            <iiif-explorer
              ref={this.iiifExplorer}
              manifest="https://figgy.princeton.edu/collections/aeea1349-1da4-48b2-9ce8-49da9e833db8/manifest"
              copy-enabled="true"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default IIIFPlayerWrapper;
