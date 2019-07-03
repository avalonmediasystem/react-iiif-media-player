"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchManifest = fetchManifest;
exports.fetchLocalManifest = fetchLocalManifest;

var _wgbhManifest = _interopRequireDefault(require("../json/wgbh-manifest"));

var _Root = require("../Root");

// Import the redux store, which is holding external configuration we might need
function fetchManifest(url) {
  var externalConfig = getExternalConfig();
  return fetch(url, externalConfig).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Network request was not ok');
  }).then(function (json) {
    return json;
  })["catch"](function (err) {
    console.log('Problem with the fetch operation', err);
    return {
      error: 'Network failure fetching the manifest'
    };
  });
} // Mock API call


function fetchLocalManifest() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(_wgbhManifest["default"]);
    }, 500);
  });
}

function getExternalConfig() {
  var currentState = _Root.store.getState();

  var fetch = currentState.externalConfig.fetch;
  var obj = {};

  if (fetch && fetch.options) {
    Object.assign(obj, fetch.options);
  }

  return obj;
}