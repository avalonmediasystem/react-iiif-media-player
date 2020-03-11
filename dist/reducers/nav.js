"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {
  reload: false,
  canvasIndex: 0
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.NAV_ITEM_CLICK:
      return Object.assign({}, state, {
        clickedUrl: action.payload
      });

    case types.MEJS_SWAP:
      return Object.assign({}, state, {
        reload: true,
        canvasIndex: action.payload
      });

    default:
      return state;
  }
};

var _default = nav;
exports["default"] = _default;