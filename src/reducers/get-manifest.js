import * as types from '../actions/types';

const initialState = {
  error: false,
  loading: false
}

const getManifest = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MANIFEST_REQUEST:
      return Object.assign({}, state, {
        error: false,
        loading: true,
        manifest: null,
        url: action.payload
      })
    case types.FETCH_MANIFEST_SUCCESS:
      return Object.assign({}, state, {
        error: false,
        loading: false,
        manifest: action.payload
      })
    case types.FETCH_MANIFEST_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
        manifest: null,
        url: null
      });
    default:
      return state;
  }
};

export default getManifest;
