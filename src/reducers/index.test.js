import reducer from './index';

describe('reducer', () => {
  const playerInitialState = {
    captionOn: true,
    canvasIndex: 0,
    isPlaying: false
  };

  const navInitialState = {
    clickedUrl: '',
    startTime: 0
  };
  it('should return the initial state', () => {
    const reducerResults = reducer(undefined, { type: 'YYY' });
    expect(reducer(undefined, {})).toEqual({
      externalConfig: {},
      getManifest: {
        error: false,
        loading: false
      },
      nav: navInitialState,
      player: playerInitialState
    });
  });
});
