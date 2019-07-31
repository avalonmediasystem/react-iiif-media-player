"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReduxManifest = void 0;

var _Root = require("../Root");

// Necessary so we can more easily mock in tests
var getReduxManifest = function getReduxManifest() {
  return _Root.store.getState().getManifest.manifest;
};

exports.getReduxManifest = getReduxManifest;