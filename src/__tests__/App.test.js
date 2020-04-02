import React from 'react';
import { renderWithRedux } from '../services/testing-helpers';
import App from '../App';
import manifest from '../json/mahler-symphony-audio';
import { fireEvent } from '@testing-library/react';

describe('Integration test', () => {
  test('renders successfully', () => {
    const { getByTestId, queryByTestId, getByText } = renderWithRedux(
      <App iiifManifest={manifest} />
    );
    expect(getByTestId('mediaelement')).toBeInTheDocument();
    expect(queryByTestId('audio-element')).toBeInTheDocument();

    expect(getByTestId('structured-nav')).toBeInTheDocument();
    expect(getByText('Track 1. II. Tempo di Menuetto')).toBeInTheDocument();
  });

  test('renders section when clicked on structure item', () => {
    const { getByTestId, getByText } = renderWithRedux(
      <App iiifManifest={manifest} />
    );

    // Check for a segment in 2nd section
    expect(getByText('Track 1. II. Tempo di Menuetto')).toBeInTheDocument();
    expect(getByTestId('audio-element').src).toBe(
      'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/high/320Kbps.mp4'
    );
    fireEvent.click(getByText('Track 1. II. Tempo di Menuetto'));

    // Loads the 2nd canvas into the player
    expect(getByTestId('mediaelement')).toBeInTheDocument();
    expect(getByTestId('audio-element').src).toBe(
      'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD2/high/320Kbps.mp4'
    );
  });
});
