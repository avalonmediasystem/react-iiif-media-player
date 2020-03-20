import reducer from './player';
import * as types from '../actions/types';

describe('player reducer', () => {
  const initialState = {
    captionOn: true,
    reload: false,
    canvasIndex: 0
  };

  it('should return the initial state', () => {
    reducer(undefined, { type: 'XXX' });
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle MEJS_PLAYER_INITIALIZED', () => {
    const player = {
      mejsProp1: 'foo',
      mejsProp2: 'bar'
    };
    expect(
      reducer(undefined, {
        type: types.MEJS_PLAYER_INITIALIZED,
        payload: player
      })
    ).toEqual({ ...initialState, instance: player });
  });

  it('should handle MEJS_SWAP', () => {
    const canvasIndex = 1;
    expect(
      reducer(undefined, {
        type: types.MEJS_SWAP,
        payload: canvasIndex
      })
    ).toEqual({
      ...initialState,
      reload: true,
      canvasIndex: canvasIndex
    });
  });

  it('should handle MEJS_CAPTIONS', () => {
    const captionOn = false;
    expect(
      reducer(undefined, {
        type: types.MEJS_CAPTIONS,
        payload: captionOn
      })
    ).toEqual({ ...initialState, captionOn });
  });
});
