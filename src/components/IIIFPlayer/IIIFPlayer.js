import React from 'react';
import { ManifestProvider } from '../../context/manifest-context';
import { PlayerProvider } from '../../context/player-context';
import IIIFPlayerWrapper from '@Components/IIIFPlayerWrapper';
import PropTypes from 'prop-types';

export default function IIIFPlayer({ manifestUrl }) {
  if (!manifestUrl) return <p>You must pass in a manifest url</p>;

  return (
    <ManifestProvider>
      <PlayerProvider>
        <IIIFPlayerWrapper manifestUrl={manifestUrl} />
      </PlayerProvider>
    </ManifestProvider>
  );
}

IIIFPlayer.propTypes = {
  /** A valid IIIF manifest uri */
  manifestUrl: PropTypes.string,
};
