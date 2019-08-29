import React from 'react';
import { renderWithRedux } from '../services/testing-helpers';
import StructuredNav from './StructuredNav';
import manifest from '../json/manifest-pawpaw-mahler';
import { fireEvent } from '@testing-library/react';

describe('StructuredNav component', () => {
  test('renders successfully', () => {
    const { container } = renderWithRedux(
      <StructuredNav manifest={manifest} />
    );
    expect(container).toBeTruthy();
  });

  test('returns a List of items when structures are present in the manifest', () => {
    const { queryAllByTestId } = renderWithRedux(
      <StructuredNav manifest={manifest} />
    );
    expect(queryAllByTestId('list').length).toBeGreaterThan(0);
  });

  test('returns message when structures are not present in manifest', () => {
    let manifestWithoutStructures = JSON.parse(JSON.stringify(manifest));
    delete manifestWithoutStructures.structures;

    const { queryByTestId, getByText } = renderWithRedux(
      <StructuredNav manifest={manifestWithoutStructures} />
    );
    expect(queryByTestId('list')).toBeNull();
    expect(
      getByText(/There are no structures in the manifest/)
    ).toBeInTheDocument();
  });
});
