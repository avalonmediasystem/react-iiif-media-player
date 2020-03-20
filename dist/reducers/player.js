"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {
  captionOn: true,
  reload: false,
  canvasIndex: 0
};

var player = function player() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.MEJS_PLAYER_INITIALIZED:
      return Object.assign({}, state, {
        instance: action.payload
      });

    case types.MEJS_SWAP:
      return Object.assign({}, state, {
        reload: true,
        canvasIndex: action.payload
      });

    case types.MEJS_CAPTIONS:
      return Object.assign({}, state, {
        captionOn: action.payload
      });

    default:
      return state;
  }
};

var _default = player;
exports["default"] = _default;