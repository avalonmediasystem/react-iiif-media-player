import reducer from './external-config';
import * as types from '../actions/types';

describe('Redux external-config reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle UPDATE_EXTERNAL_CONFIG', () => {
    const mockExternalConfig = {
      fetch: {
        credentials: 'omit',
      },
      resizable: true,
    };

    expect(
      reducer(undefined, {
        type: types.UPDATE_EXTERNAL_CONFIG,
        payload: mockExternalConfig,
      })
    ).toEqual(mockExternalConfig);
  });
});
