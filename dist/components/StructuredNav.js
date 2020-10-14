"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("./List"));

var _iiifParser = require("../services/iiif-parser");

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var StructuredNav = function StructuredNav(props) {
  // Subscribe to Redux store variables
  var playerProps = (0, _reactRedux.useSelector)(function (state) {
    return state.player;
  });
  var instance = playerProps.instance,
      canvasIndex = playerProps.canvasIndex;
  var navProps = (0, _reactRedux.useSelector)(function (state) {
    return state.nav;
  });
  var clicked = navProps.clicked,
      clickedUrl = navProps.clickedUrl;
  var canvases = (0, _reactRedux.useSelector)(function (state) {
    return state.getManifest.canvases;
  }); // Reference for dispatching actions

  var dispatch = (0, _reactRedux.useDispatch)();
  var manifest = props.manifest;
  (0, _react.useEffect)(function () {
    if (clicked) {
      var canvasInManifest = canvases.find(function (c) {
        return (0, _iiifParser.getCanvasId)(clickedUrl) === c.canvasId;
      });
      var currentCanvasIndex = canvases.indexOf(canvasInManifest);
      var timeFragment = (0, _iiifParser.getMediaFragment)(clickedUrl); // Invalid time fragment

      if (!timeFragment) {
        console.error('Error retrieving time fragment object from Canvas URL in structured navigation');
      } // When clicked structure item is not in the current canvas


      if (canvasIndex != currentCanvasIndex) {
        dispatch((0, _actions.switchCanvas)(currentCanvasIndex, timeFragment.start));
      } else {
        // Set the playhead at the start of the time fragment
        instance.setCurrentTime(timeFragment.start, dispatch((0, _actions.resetClick)()));
      }
    }
  });

  if (manifest.structures) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      "data-testid": "structured-nav",
      className: "structured-nav",
      key: Math.random()
    }, manifest.structures[0] && manifest.structures[0].items ? manifest.structures[0].items.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_List["default"], {
        items: [item],
        key: index,
        isChild: false
      });
    }) : null);
  }

  return /*#__PURE__*/_react["default"].createElement("p", null, "There are no structures in the manifest.");
};

StructuredNav.propTypes = {
  manifest: _propTypes["default"].object.isRequired
};
var _default = StructuredNav;
exports["default"] = _default;