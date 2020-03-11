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
  var subMenu = item.items && item.items.length > 0 && childCanvases.length === 0 ? _react["default"].createElement(_List["default"], {
    items: item.items
  }) : null;

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    props.navItemClick(e.target.href);
  };

  var renderListItem = function renderListItem() {
    var label = (0, _iiifParser.getLabelValue)(item.label);

    if (childCanvases.length > 0) {
      return childCanvases.map(function (canvasId) {
        return _react["default"].createElement("a", {
          key: canvasId,
          href: canvasId,
          onClick: handleClick
        }, label);
      });
    } else {
      return label;
    }
  };

  return _react["default"].createElement("li", {
    "data-testid": "list-item"
  }, renderListItem(), subMenu);
};

ListItem.propTypes = {
  item: _propTypes["default"].object.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    navItemClick: function navItemClick(url) {
      return dispatch(actions.navItemClick(url));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ListItem);

exports["default"] = _default;