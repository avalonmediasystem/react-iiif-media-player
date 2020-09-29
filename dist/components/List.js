"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iiifParser = require("../services/iiif-parser");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var List = function List(props) {
  var _useState = (0, _react.useState)((0, _iiifParser.getLabelValue)(props.items[0].label)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      label = _useState2[0],
      setLabel = _useState2[1];

  var collapsibleContent = /*#__PURE__*/_react["default"].createElement("ul", {
    "data-testid": "list"
  }, props.items.map(function (item) {
    var filteredItem = (0, _iiifParser.filterVisibleRangeItem)(item);

    if (!filteredItem) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: filteredItem.id,
      item: filteredItem,
      isChild: props.isChild
    });
  }));

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !props.isChild ? /*#__PURE__*/_react["default"].createElement(Collapsible, {
    children: collapsibleContent,
    title: label,
    key: props.index
  }) : collapsibleContent);
};

List.propTypes = {
  items: _propTypes["default"].array.isRequired,
  isChild: _propTypes["default"].bool.isRequired
};
var _default = List;
exports["default"] = _default;

var Collapsible = function Collapsible(props) {
  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var togglePanel = function togglePanel() {
    setOpen(!open);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(e) {
      return togglePanel(e);
    },
    className: "structure-header",
    "data-testid": "collapsible"
  }, props.title, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: open ? _freeSolidSvgIcons.faMinus : _freeSolidSvgIcons.faPlus
  })), open ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "structure-content"
  }, props.children) : null);
};