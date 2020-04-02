import * as types from './types';
import * as actions from './index';

describe('actions', () => {
  it('should create an action for clicking on a navigation item', () => {
    const url =
      'http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=160,165';
    const expectedAction = {
      type: types.NAV_ITEM_CLICK,
      payload: url
    };
    expect(actions.navItemClick(url)).toEqual(expectedAction);
  });

  it('should create an action for passed in external component configuration', () => {
    const mockExternalConfig = {
      fetch: {
        credentials: 'omit'
      },
      resizable: true
    };
    const expectedAction = {
      type: types.UPDATE_EXTERNAL_CONFIG,
      payload: mockExternalConfig
    };
    expect(actions.updateExternalConfig(mockExternalConfig)).toEqual(
      expectedAction
    );
  });

  it('should create an action for Mediaelement player initiliization', () => {
    const player = {
      mejsProp1: 'bar',
      mejsProp2: 'foo'
    };
    const canvasIndex = 0;
    const expectedAction = {
      type: types.MEJS_PLAYER_INITIALIZED,
      payload: player
    };
    expect(actions.playerInitialized(player, canvasIndex)).toEqual(
      expectedAction
    );
  });

  it('should create an action for Mediaelement player captions button click', () => {
    const captionOn = false;
    const expectedAction = {
      type: types.MEJS_CAPTIONS,
      payload: captionOn
    };
    expect(actions.registerCaptionChange(captionOn)).toEqual(expectedAction);
  });

  it('should create an action for Mediaelement player play/pause status', () => {
    const isPlaying = true;
    const expectedAction = {
      type: types.MEJS_PLAYING,
      payload: isPlaying
    };
    expect(actions.setPlayingStatus(isPlaying)).toEqual(expectedAction);
  });

  it('should create an action for setting the playhead start time', () => {
    const startTime = 234;
    const expectedAction = {
      type: types.NAV_START_TIME,
      payload: startTime
    };
    expect(actions.setStartTime(startTime)).toEqual(expectedAction);
  });

  it('should create an action for setting clicked flag to false', () => {
    const expectedAction = {
      type: types.NAV_RESET_CLICK
    };
    expect(actions.resetClick()).toEqual(expectedAction);
  });
});
