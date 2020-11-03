import React, { useEffect, useState } from 'react';
import MediaElementContainer from '@Components/MediaElementContainer';
import { useManifestDispatch } from '../context/manifest-context';
import StructuredNavigation from '@Components/StructuredNavigation/StructuredNavigation';

export default function IIIFPlayerWrapper({ manifestUrl }) {
  const [manifest, setManifest] = useState();
  const dispatch = useManifestDispatch();

  useEffect(() => {
    fetch(manifestUrl)
      .then((result) => result.json())
      .then((data) => {
        console.log('data', data);
        setManifest(data);
        dispatch({ manifest: data, type: 'updateManifest' });
      });
  }, []);

  if (!manifest) return <p>...Loading</p>;

  return (
    <section className="iiif-player">
      <div className="container">
        <MediaElementContainer manifest={manifest} canvasIndex={0} />
        <StructuredNavigation manifest={manifest} />
      </div>
    </section>
  );
}
