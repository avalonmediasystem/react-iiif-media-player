import reducer from './index';

describe('reducer', () => {
  const playerInitialState = {
    captionOn: true,
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
      nav: {},
      player: playerInitialState
    });
  });
});
