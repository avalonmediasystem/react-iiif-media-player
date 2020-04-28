import React, { Component } from 'react';
import Root from '../../../src';
import {
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from 'react-bootstrap';
import axios from 'axios';

class IIIFPlayerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iiifmanifest: this.props.iiifManifest,
      iiifmanifestURL: this.props.iiifManifest.id,
      manifestFetched: true,
      manifestError: null,
    };
    this.iiifExplorer = React.createRef();
  }

  selectIIIFManifest = () => {
    const self = this;
    if (this.state.iiifmanifestURL != '') {
      axios
        .get(this.state.iiifmanifestURL)
        .then(function (result) {
          self.setState({ iiifmanifest: result.data, manifestFetched: true });
        })
        .catch(function (error) {
          let errorMessage =
            'There was an error loading manifest file. Please check the manifest URL';
          if (error.response) {
            errorMessage = `Couldn't load manifest. Error status: ${error.response.status}, status text: ${error.response.statusText}`;
          }
          self.setState({
            manifestFetched: false,
            manifestError: errorMessage,
          });
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      iiifmanifestURL: e.target.value,
    });
  };

  setManifestFetched = () => {
    const fetched = this.state.manifestFetched;
    this.setState({
      manifestFetched: !fetched,
    });
  };

  componentDidMount() {
    const self = this;
    this.iiifExplorer.current.addEventListener('selectManifest', function (e) {
      self.setState({ iiifmanifestURL: e.detail.id });
      self.selectIIIFManifest();
    });
  }

  render() {
    return (
      <div className="iiif-player-demo">
        <Row>
          <Col>
            <div className="player-container">
              <h1>IIIF Media Player</h1>
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
            />
            <br />
            {!this.state.manifestFetched && (
              <Alert
                variant="danger"
                onClose={this.setManifestFetched}
                dismissible
              >
                {this.state.manifestError}
              </Alert>
            )}
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Manifest URL"
                aria-label="Manifest URL"
                value={this.state.iiifmanifestURL}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={this.selectIIIFManifest}
                >
                  Set Manifest
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IIIFPlayerWrapper;
