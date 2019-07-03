"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {
  error: false,
  loading: false
};

var getManifest = function getManifest() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.FETCH_MANIFEST_REQUEST:
      return Object.assign({}, state, {
        error: false,
        loading: true,
        manifest: null,
        url: action.payload
      });

    case types.FETCH_MANIFEST_SUCCESS:
      return Object.assign({}, state, {
        error: false,
        loading: false,
        manifest: action.payload
      });

    case types.FETCH_MANIFEST_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
        manifest: null,
        url: null
      });

    default:
      return state;
  }
};

var _default = getManifest;
exports["default"] = _default;