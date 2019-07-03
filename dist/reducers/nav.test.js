import reducer from './nav';
import * as types from '../actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    const reducerResults = reducer(undefined, { type: 'YYY' });
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle NAV_ITEM_CLICK', () => {
    const url = 'https://northwestern.edu';

    expect(
      reducer(undefined, {
        type: types.NAV_ITEM_CLICK,
        payload: url
      })
    ).toEqual({
      clickedUrl: url
    });
  });
});
