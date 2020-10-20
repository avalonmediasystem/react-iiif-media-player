"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("./List"));

var _iiifParser = require("../services/iiif-parser");

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../actions"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ListItem = function ListItem(props) {
  var item = props.item;
  var childCanvases = (0, _iiifParser.getChildCanvases)(item.id);
  var subMenu = item.items && item.items.length > 0 && childCanvases.length === 0 ? /*#__PURE__*/_react["default"].createElement(_List["default"], {
    items: item.items,
    isChild: true
  }) : null; // Reference for dispatching actions

  var dispatch = (0, _reactRedux.useDispatch)();

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.navItemClick(e.target.href));
  };

  var renderListItem = function renderListItem() {
    var label = (0, _iiifParser.getLabelValue)(item.label);

    if (childCanvases.length > 0) {
      return childCanvases.map(function (canvasId) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          key: canvasId,
          href: canvasId,
          onClick: handleClick
        }, label);
      });
    }

    if (props.isChild) {
      return label;
    }

    return null;
  };

  return /*#__PURE__*/_react["default"].createElement("li", {
    "data-testid": "list-item"
  }, renderListItem(), subMenu);
};

ListItem.propTypes = {
  item: _propTypes["default"].object.isRequired,
  isChild: _propTypes["default"].bool
};
var _default = ListItem;
exports["default"] = _default;