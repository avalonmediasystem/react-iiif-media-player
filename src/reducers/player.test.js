import reducer from './player';
import * as types from '../actions/types';

describe('player reducer', () => {
  const initialState = {
    captionOn: true,
    canvasIndex: 0,
    isPlaying: false
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
    const canvasIndex = 0;
    expect(
      reducer(undefined, {
        type: types.MEJS_PLAYER_INITIALIZED,
        player,
        canvasIndex
      })
    ).toEqual({ ...initialState, instance: player, canvasIndex: canvasIndex });
  });

  it('should handle MEJS_SWAP', () => {
    const nextState = {
      captionOn: true,
      canvasIndex: 1,
      isPlaying: false
    };
    expect(
      reducer(undefined, {
        type: types.MEJS_SWAP,
        payload: 1
      })
    ).toEqual(nextState);
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

  it('should handle MEJS_PLAYING', () => {
    const isPlaying = true;
    expect(
      reducer(undefined, {
        type: types.MEJS_PLAYING,
        payload: isPlaying
      })
    ).toEqual({ ...initialState, isPlaying });
  });
});
