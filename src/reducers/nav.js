import * as types from '../actions/types';

const initialState = {
  clickedUrl: '',
  startTime: 0
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case types.NAV_ITEM_CLICK:
      return Object.assign({}, state, {
        clickedUrl: action.payload,
        clicked: true
      });

    case types.NAV_STARTTIME:
      return Object.assign({}, state, {
        startTime: action.payload
      });

    case types.NAV_UNCLICK:
      return Object.assign({}, state, {
        clicked: false,
        startTime: 0,
        clickedUrl: ''
      });

    default:
      return state;
  }
};

export default nav;
