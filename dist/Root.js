"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.store = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

var _App = _interopRequireDefault(require("./App"));

var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
exports.store = store;

var Root = function Root(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_App["default"], (0, _extends2["default"])({}, props, {
    canvasIndex: 0
  })));
};

var _default = Root;
exports["default"] = _default;