import React, { useState, useEffect, useRef } from 'react';
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

const IIIFPlayerWrapper = (props) => {
  const [iiifmanifest, setIIIFmanifest] = useState(props.iiifManifest);
  const [iiifmanifestURL, setIIIFmanifestURL] = useState(props.iiifManifestUrl);
  const [showManifestFetchedAlert, setAlert] = useState(false);
  const [manifestError, setError] = useState(null);

  const iiifExplorer = useRef();

  useEffect(() => {
    iiifExplorer.current.addEventListener('selectManifest', function (e) {
      setIIIFmanifestURL(e.detail.id);
      selectIIIFManifest(e.detail.id);
    });
  }, []);

  const selectIIIFManifest = (url) => {
    debugger;
    if (url != '') {
      axios
        .get(url)
        .then(function (result) {
          setIIIFmanifest(result.data);
          setAlert(false);
        })
        .catch(function (error) {
          let errorMessage =
            'There was an error loading manifest file. Please check the manifest URL';
          if (error.response) {
            errorMessage = `Couldn't load manifest. Error status: ${error.response.status}, status text: ${error.response.statusText}`;
          }
          setAlert(true);
          setError(errorMessage);
          handleAlert();
        });
    }
  };

  const handleChange = (e) => {
    setIIIFmanifestURL(e.target.value);
  };

  const handleAlert = () => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div className="container" id="iiif-player-demo">
      <Row>
        <Col>
          <h1>IIIF Media Player</h1>
          <Root config={props.config} iiifManifest={iiifmanifest} />
        </Col>
        <Col className="explorer">
          <iiif-explorer
            ref={iiifExplorer}
            manifest="https://dlib.indiana.edu/iiif_av/iiif-player-samples/manifest-collections.json"
          />
          <br />
          {showManifestFetchedAlert && (
            <Alert variant="danger">{manifestError}</Alert>
          )}
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Manifest URL"
              aria-label="Manifest URL"
              value={iiifmanifestURL}
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={selectIIIFManifest}>
                Set Manifest
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default IIIFPlayerWrapper;
