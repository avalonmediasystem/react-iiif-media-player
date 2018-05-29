import * as types from '../actions/types';

const player = (state = {}, action) => {
  switch (action.type) {
    case types.MEJS_PLAYER_INITIALIZED:
      return action.payload;
    default:
      return state;
  }
};

export default player;
