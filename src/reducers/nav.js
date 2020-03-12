import * as types from '../actions/types';

const initialState = {
  reload: false,
  canvasIndex: 0
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case types.NAV_ITEM_CLICK:
      return Object.assign({}, state, {
        clickedUrl: action.payload
      });

    case types.MEJS_SWAP:
      return Object.assign({}, state, {
        reload: true,
        canvasIndex: action.payload
      });
    default:
      return state;
  }
};

export default nav;
