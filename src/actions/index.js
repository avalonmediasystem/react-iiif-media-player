import * as types from './types';
import * as api from '../services/api';

export function fetchManifestRequest(url) {
  return {
    type: types.FETCH_MANIFEST_REQUEST,
    payload: url
  };
}

export function fetchManifestSuccess(manifest) {
  return {
    type: types.FETCH_MANIFEST_SUCCESS,
    payload: manifest
  };
}

export function fetchManifestFailure(error) {
  return {
    type: types.FETCH_MANIFEST_FAILURE,
    payload: error
  };
}

export function playerInitialized(player) {
  return {
    type: types.MEJS_PLAYER_INITIALIZED,
    payload: player
  };
}

export function navItemClick(url) {
  return {
    type: types.NAV_ITEM_CLICK,
    payload: url
  };
}

export function getRemoteManifest(url) {
  return dispatch => {
    dispatch(fetchManifestRequest(url));

    return api.fetchManifest(url).then(response => {
      if (response.error) {
        return dispatch(fetchManifestFailure(response.error));
      }
      return dispatch(fetchManifestSuccess(response));
    });
  };
}
