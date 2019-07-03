"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchManifestRequest = fetchManifestRequest;
exports.fetchManifestSuccess = fetchManifestSuccess;
exports.fetchManifestFailure = fetchManifestFailure;
exports.playerInitialized = playerInitialized;
exports.navItemClick = navItemClick;
exports.updateExternalConfig = updateExternalConfig;
exports.getRemoteManifest = getRemoteManifest;

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

function playerInitialized(player) {
  return {
    type: types.MEJS_PLAYER_INITIALIZED,
    payload: player
  };
}

function navItemClick(url) {
  return {
    type: types.NAV_ITEM_CLICK,
    payload: url
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
}