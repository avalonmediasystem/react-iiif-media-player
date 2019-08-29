import React from 'react';
import { renderWithRedux } from '../services/testing-helpers';
import ListItem from './ListItem';

const singleItem = {
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
};

const multiItem = {
  type: 'Range',
  id:
    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rc4e652a6-a56e-43fa-9509-9c4e25bb024f',
  label: {
    '@none': ['Mahler, Symphony No.3 (cont.)']
  },
  items: [
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r8fa7b5ba-32cf-40f6-8530-86cdf8cd6d94',
      label: {
        '@none': ['Track 1. II. Tempo di Menuetto']
      },
      items: [
        {
          type: 'Canvas',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=0.0,566.0'
        }
      ]
    },
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rdb1f5c54-57d1-4e62-8512-51da85ea47ee',
      label: {
        '@none': ['Track 3. Tempo I']
      },
      items: [
        {
          type: 'Canvas',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=1183.0,1635.0'
        }
      ]
    },
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r0d6fd74a-517a-40aa-b763-3ac8b7853485',
      label: {
        '@none': ['Track 9. Tempo I']
      },
      items: [
        {
          type: 'Canvas',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=3451.0,3829.0'
        }
      ]
    }
  ]
};

describe('ListItem component', () => {
  test('renders successfully', () => {
    const { container, debug } = renderWithRedux(
      <ListItem item={singleItem} />
    );
    expect(container).toBeTruthy();
  });

  test('creates an anchor element and title for an item', () => {
    const { getByTestId, getByText, debug, queryByTestId } = renderWithRedux(
      <ListItem item={singleItem} />
    );
    expect(getByTestId(/list-item/)).toBeInTheDocument();

    const anchorElement = getByText('Track 1. I. Kraftig');
    expect(anchorElement.tagName).toEqual('A');
    expect(anchorElement).toHaveAttribute(
      'href',
      'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=0.0,374.0'
    );

    expect(queryByTestId('list')).not.toBeInTheDocument();
  });

  test('renders a child list if there are child ranges in manifest', () => {
    const { getByTestId, queryAllByTestId, debug } = renderWithRedux(
      <ListItem item={multiItem} />
    );
    expect(getByTestId('list')).toBeInTheDocument();

    // Expect there to be 3 elements in list
    expect(queryAllByTestId('list-item').length).toEqual(4);
  });
});
