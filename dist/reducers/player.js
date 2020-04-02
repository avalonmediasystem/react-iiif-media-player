"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {
  captionOn: true,
  canvasIndex: 0,
  isPlaying: false
};

var player = function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.MEJS_PLAYER_INITIALIZED:
      return Object.assign({}, state, {
        instance: action.payload
      });

    case types.MEJS_CAPTIONS:
      return Object.assign({}, state, {
        captionOn: action.payload
      });

    case types.MEJS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: action.payload
      });

    case types.MEJS_SWITCH_CANVAS:
      return Object.assign({}, state, {
        canvasIndex: action.payload
      });

    default:
      return state;
  }
};

var _default = player;
exports["default"] = _default;