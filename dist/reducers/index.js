"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _getManifest = _interopRequireDefault(require("./get-manifest"));

var _nav = _interopRequireDefault(require("./nav"));

var _player = _interopRequireDefault(require("./player"));

var _externalConfig = _interopRequireDefault(require("./external-config"));

var rootReducer = (0, _redux.combineReducers)({
  externalConfig: _externalConfig["default"],
  getManifest: _getManifest["default"],
  nav: _nav["default"],
  player: _player["default"]
});
var _default = rootReducer;
exports["default"] = _default;