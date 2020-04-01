import React, { useState } from 'react';
import { Dropdown, InputGroup, FormControl, Button } from 'react-bootstrap';

const SourceChooser = props => {
  const [manifestURL, setManifestURL] = useState('');
  const sourceMenuRef = React.createRef();

  const handleOnClick = e => {
    e.preventDefault();
    props.getManifest(e.target.href);
  };

  const handleFetch = e => {
    e.preventDefault();
    props.getManifest(manifestURL);
    sourceMenuRef.current.className = 'dropdown-menu';
    setManifestURL('');
  };

  const handleChange = e => {
    setManifestURL(e.target.value);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Source
      </Dropdown.Toggle>
      <Dropdown.Menu ref={sourceMenuRef}>
        <Dropdown.Item
          href="/demo/data/mahler-symphony-audio.json"
          onClick={handleOnClick}
        >
          Audio Manifest
        </Dropdown.Item>
        <Dropdown.Item
          href="/demo/data/mco-staging-video.json"
          onClick={handleOnClick}
        >
          1997 TV AD Campaign - Video Manifest
        </Dropdown.Item>
        <Dropdown.Item
          href="/demo/data/mahler-symphony-video.json"
          onClick={handleOnClick}
        >
          Video Manifest
        </Dropdown.Item>
        <Dropdown.Divider />
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Manifest URL"
            aria-label="Manifest URL"
            value={manifestURL}
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleFetch}>
              Fetch
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SourceChooser;
