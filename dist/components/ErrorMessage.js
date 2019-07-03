"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ErrorMessage = function ErrorMessage(props) {
  return _react["default"].createElement("p", null, "ERROR: ", props.message);
};

ErrorMessage.propTypes = {
  message: _propTypes["default"].string.isRequired
};
var _default = ErrorMessage;
exports["default"] = _default;