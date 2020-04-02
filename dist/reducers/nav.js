"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {
  clickedUrl: '',
  startTime: 0
};

var nav = function nav() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.NAV_ITEM_CLICK:
      return Object.assign({}, state, {
        clickedUrl: action.payload,
        clicked: true
      });

    case types.NAV_START_TIME:
      return Object.assign({}, state, {
        startTime: action.payload
      });

    case types.NAV_RESET_CLICK:
      return Object.assign({}, state, {
        clicked: false,
        startTime: 0,
        clickedUrl: ''
      });

    default:
      return state;
  }
};

var _default = nav;
exports["default"] = _default;