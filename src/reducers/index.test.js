import reducer from './index';
import * as types from '../actions/types';

describe('reducer', () => {
  const initialState = {
    reload: false,
    canvasIndex: 0
  };
  it('should return the initial state', () => {
    const reducerResults = reducer(undefined, { type: 'YYY' });
    expect(reducer(undefined, {})).toEqual({
      externalConfig: {},
      getManifest: {
        error: false,
        loading: false
      },
      nav: initialState,
      player: {}
    });
  });
});
