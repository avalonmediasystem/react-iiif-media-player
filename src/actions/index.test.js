import * as types from './types';
import * as actions from './index';

describe('actions', () => {
  it('should create an action for Mediaelement player initiliization', () => {
    const player = {
      mejsProp1: 'bar',
      mejsProp2: 'foo'
    };
    const expectedAction = {
      type: types.MEJS_PLAYER_INITIALIZED,
      payload: player
    };
    expect(actions.playerInitialized(player)).toEqual(expectedAction);
  });

  it('should create an action for clicking on a navigation item', () => {
    const url =
      'http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=160,165';
    const expectedAction = {
      type: types.NAV_ITEM_CLICK,
      payload: url
    };
    expect(actions.navItemClick(url)).toEqual(expectedAction);
  });
});
