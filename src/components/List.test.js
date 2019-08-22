import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import List from './List';
import manifest from '../json/manifest-pawpaw-mahler';
import { renderWithRedux } from '../services/testing-helpers';

const initialState = {
  getManifest: {
    manifest: {
      foo: 'bar'
    }
  }
};

// This mocks the manifest for tests...at least for now
jest.mock('../services/get-redux-manifest');

test('renders the component', () => {
  const { container, debug } = renderWithRedux(
    <List items={manifest.structures} />,
    {
      initialState
    }
  );
  debug();

  expect(container).toBeTruthy();
});
