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
    expect(getByTestId('mediaelement-0')).toBeInTheDocument();
    expect(queryByTestId('audio-element')).toBeInTheDocument();

    expect(getByTestId('structured-nav')).toBeInTheDocument();
    expect(getByText('Track 1. II. Tempo di Menuetto')).toBeInTheDocument();
  });

  test('renders section when clicked on structure item', () => {
    const { getByTestId, getByText, queryByTestId } = renderWithRedux(
      <App iiifManifest={manifest} />
    );

    // Check for a segment in 2nd section
    expect(getByText('Track 1. II. Tempo di Menuetto')).toBeInTheDocument();
    fireEvent.click(getByText('Track 1. II. Tempo di Menuetto'));

    // Loads the 2nd canvas into the player
    expect(getByTestId('mediaelement-1')).toBeInTheDocument();
    expect(queryByTestId('mediaelement-0')).not.toBeInTheDocument();
  });
});
