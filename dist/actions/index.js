"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchManifestRequest = fetchManifestRequest;
exports.fetchManifestSuccess = fetchManifestSuccess;
exports.fetchManifestFailure = fetchManifestFailure;
exports.updateExternalConfig = updateExternalConfig;
exports.getRemoteManifest = getRemoteManifest;
exports.navItemClick = navItemClick;
exports.setStartTime = setStartTime;
exports.resetClick = resetClick;
exports.playerInitialized = playerInitialized;
exports.switchCanvas = switchCanvas;
exports.registerCaptionChange = registerCaptionChange;
exports.setPlayingStatus = setPlayingStatus;
exports.setCanvasIndex = setCanvasIndex;

var types = _interopRequireWildcard(require("./types"));

var api = _interopRequireWildcard(require("../services/api"));

function fetchManifestRequest(url) {
  return {
    type: types.FETCH_MANIFEST_REQUEST,
    payload: url
  };
}

function fetchManifestSuccess(manifest) {
  return {
    type: types.FETCH_MANIFEST_SUCCESS,
    payload: manifest
  };
}

function fetchManifestFailure(error) {
  return {
    type: types.FETCH_MANIFEST_FAILURE,
    payload: error
  };
}

function updateExternalConfig(config) {
  return {
    type: types.UPDATE_EXTERNAL_CONFIG,
    payload: config
  };
}

function getRemoteManifest(url) {
  return function (dispatch) {
    dispatch(fetchManifestRequest(url));
    return api.fetchManifest(url).then(function (response) {
      if (response.error) {
        return dispatch(fetchManifestFailure(response.error));
      }

      return dispatch(fetchManifestSuccess(response));
    });
  };
} // Nav actions


function navItemClick(url) {
  return {
    type: types.NAV_ITEM_CLICK,
    payload: url
  };
}

function setStartTime(time) {
  return {
    type: types.NAV_START_TIME,
    payload: time
  };
}

function resetClick() {
  return {
    type: types.NAV_RESET_CLICK
  };
} // Player actions


function playerInitialized(player) {
  return {
    type: types.MEJS_PLAYER_INITIALIZED,
    payload: player
  };
}

function switchCanvas(canvasId) {
  var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return function (dispatch) {
    dispatch(setCanvasIndex(canvasId));
    dispatch(setStartTime(startTime));
  };
}

function registerCaptionChange(captionOn) {
  return {
    type: types.MEJS_CAPTIONS,
    payload: captionOn
  };
}

function setPlayingStatus(isPlaying) {
  return {
    type: types.MEJS_PLAYING,
    payload: isPlaying
  };
}

function setCanvasIndex(index) {
  return {
    type: types.MEJS_SWITCH_CANVAS,
    payload: index
  };
}