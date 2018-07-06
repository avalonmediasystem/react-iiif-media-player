import * as types from '../actions/types';

const externalConfig = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_EXTERNAL_CONFIG:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default externalConfig;
