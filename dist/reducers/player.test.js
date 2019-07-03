import reducer from './player';
import * as types from '../actions/types';

describe('reducer', () => {
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
    ).toEqual(player);
  });
});
