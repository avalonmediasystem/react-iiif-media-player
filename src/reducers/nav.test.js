import reducer from './nav';
import * as types from '../actions/types';

describe('Redux nav reducer', () => {
  const initialState = {
    clickedUrl: '',
    startTime: 0,
  };

  it('should return the initial state', () => {
    reducer(undefined, { type: 'YYY' });
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle NAV_ITEM_CLICK', () => {
    const url = 'https://northwestern.edu';

    expect(
      reducer(undefined, {
        type: types.NAV_ITEM_CLICK,
        payload: url,
      })
    ).toEqual({
      clickedUrl: url,
      clicked: true,
      startTime: 0,
    });
  });
});
