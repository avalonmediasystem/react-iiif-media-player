import * as types from './types';
import * as api from '../services/api';

export function fetchManifestRequest(url) {
  return {
    type: types.FETCH_MANIFEST_REQUEST,
    payload: url,
  };
}

export function fetchManifestSuccess(manifest) {
  return {
    type: types.FETCH_MANIFEST_SUCCESS,
    payload: manifest,
  };
}

export function fetchManifestFailure(error) {
  return {
    type: types.FETCH_MANIFEST_FAILURE,
    payload: error,
  };
}

export function updateExternalConfig(config) {
  return {
    type: types.UPDATE_EXTERNAL_CONFIG,
    payload: config,
  };
}

export function getRemoteManifest(url) {
  return (dispatch) => {
    dispatch(fetchManifestRequest(url));

    return api.fetchManifest(url).then((response) => {
      if (response.error) {
        return dispatch(fetchManifestFailure(response.error));
      }
      return dispatch(fetchManifestSuccess(response));
    });
  };
}

// Nav actions
export function navItemClick(url) {
  return {
    type: types.NAV_ITEM_CLICK,
    payload: url,
  };
}

export function setStartTime(time) {
  return {
    type: types.NAV_START_TIME,
    payload: time,
  };
}

export function resetClick() {
  return {
    type: types.NAV_RESET_CLICK,
  };
}

// Player actions
export function playerInitialized(player) {
  return {
    type: types.MEJS_PLAYER_INITIALIZED,
    payload: player,
  };
}

export function switchCanvas(canvasId, startTime = 0) {
  return (dispatch) => {
    dispatch(setCanvasIndex(canvasId));
    dispatch(setStartTime(startTime));
  };
}

export function registerCaptionChange(captionOn) {
  return {
    type: types.MEJS_CAPTIONS,
    payload: captionOn,
  };
}

export function setPlayingStatus(isPlaying) {
  return {
    type: types.MEJS_PLAYING,
    payload: isPlaying,
  };
}

export function setCanvasIndex(index) {
  return {
    type: types.MEJS_SWITCH_CANVAS,
    payload: index,
  };
}
