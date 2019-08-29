"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iiifParser = require("../services/iiif-parser");

var List = function List(props) {
  return _react["default"].createElement("ul", {
    "data-testid": "list"
  }, props.items.map(function (item) {
    var filteredItem = (0, _iiifParser.filterVisibleRangeItem)(item);

    if (!filteredItem) {
      return null;
    }

    return _react["default"].createElement(_ListItem["default"], {
      key: filteredItem.id,
      item: filteredItem
    });
  }));
};

List.propTypes = {
  items: _propTypes["default"].array.isRequired
};
var _default = List;
exports["default"] = _default;