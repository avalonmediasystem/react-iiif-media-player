import * as types from '../actions/types';

const initialState = {
  captionOn: true,
  reload: false,
  canvasIndex: 0
};
const player = (state = initialState, action) => {
  switch (action.type) {
    case types.MEJS_PLAYER_INITIALIZED:
      return Object.assign({}, state, {
        instance: action.payload
      });

    case types.MEJS_SWAP:
      return Object.assign({}, state, {
        reload: true,
        canvasIndex: action.payload
      });

    case types.MEJS_CAPTIONS:
      return Object.assign({}, state, {
        captionOn: action.payload
      });
    default:
      return state;
  }
};

export default player;
