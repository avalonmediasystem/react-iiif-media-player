import * as types from '../actions/types';

const initialState = {
  captionOn: true,
  canvasIndex: 0,
  isPlaying: false,
};
const player = (state = initialState, action) => {
  switch (action.type) {
    case types.MEJS_PLAYER_INITIALIZED:
      return Object.assign({}, state, {
        instance: action.payload,
      });

    case types.MEJS_CAPTIONS:
      return Object.assign({}, state, {
        captionOn: action.payload,
      });

    case types.MEJS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: action.payload,
      });

    case types.MEJS_SWITCH_CANVAS:
      return Object.assign({}, state, {
        canvasIndex: action.payload,
      });

    default:
      return state;
  }
};

export default player;
