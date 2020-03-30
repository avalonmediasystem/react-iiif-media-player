import React from 'react';
import List from './List';
import manifest from '../json/mahler-symphony-audio';
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
      id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-1',
      type: 'Range',
      label: {
        en: ['Track 1. I. Kraftig']
      },
      items: [
        {
          id:
            'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=0,374',
          type: 'Canvas'
        }
      ]
    },
    {
      id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-2',
      type: 'Range',
      label: {
        en: ['Track 2. Langsam. Schwer']
      },
      items: [
        {
          id:
            'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=374,525',
          type: 'Canvas'
        }
      ]
    }
  ];

  const { getByText, getByTestId } = renderWithRedux(<List items={items} />);
  expect(getByTestId('list')).toBeInTheDocument();
  expect(getByText('Track 1. I. Kraftig')).toBeInTheDocument();
  expect(getByText('Track 2. Langsam. Schwer')).toBeInTheDocument();
});
