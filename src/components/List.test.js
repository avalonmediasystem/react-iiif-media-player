import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import List from './List';
import manifest from '../json/manifest-pawpaw-mahler';
import { renderWithRedux } from '../services/testing-helpers';

test('ListItem component renders successfully', () => {
  const { container, debug } = renderWithRedux(
    <List items={manifest.structures} />
  );
  expect(container).toBeTruthy();
});

test('Displays the correct ListItems', () => {
  const items = [
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r77825655-e324-46b1-b07b-83eee627d9bc',
      label: {
        '@none': ['Track 1. I. Kraftig']
      },
      items: [
        {
          type: 'Canvas',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=0.0,374.0'
        }
      ]
    },
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/ra62f9a38-8a34-4aea-9c87-ab48de98d0a7',
      label: {
        '@none': ['Topanga']
      },
      items: [
        {
          type: 'Canvas',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=374.0,525.0'
        }
      ]
    }
  ];

  const { getByText, getByTestId } = renderWithRedux(<List items={items} />);
  expect(getByTestId('list')).toBeInTheDocument();
  expect(getByText('Track 1. I. Kraftig')).toBeInTheDocument();
  expect(getByText('Topanga')).toBeInTheDocument();
});
