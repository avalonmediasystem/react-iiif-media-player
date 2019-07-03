"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var externalConfig = function externalConfig() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.UPDATE_EXTERNAL_CONFIG:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

var _default = externalConfig;
exports["default"] = _default;