import * as types from '../actions/types';

const nav = (state = {}, action) => {
  switch (action.type) {
    case types.NAV_ITEM_CLICK:
      return Object.assign({}, state, {
        clickedUrl: action.payload
      });

    case types.MEJS_RELOAD:
      return Object.assign({}, state, {
        reload: true,
        nextCanvas: action.payload
      });
    default:
      return state;
  }
};

export default nav;
