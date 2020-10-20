"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MediaElementContainer = _interopRequireDefault(require("./containers/MediaElementContainer"));

var _StructuredNav = _interopRequireDefault(require("./components/StructuredNav"));

var _ErrorMessage = _interopRequireDefault(require("./components/ErrorMessage"));

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("./actions"));

require("./App.scss");

var App = function App(props) {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
    return state.getManifest;
  }),
      manifest = _useSelector.manifest,
      error = _useSelector.error;

  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    var canvasIndex = props.canvasIndex,
        config = props.config,
        iiifManifest = props.iiifManifest,
        iiifManifestUrl = props.iiifManifestUrl;

    if (iiifManifest) {
      dispatch(actions.fetchManifestSuccess(iiifManifest));
    } else if (iiifManifestUrl) {
      dispatch(actions.getRemoteManifest(iiifManifestUrl));
    }

    dispatch(actions.setCanvasIndex(canvasIndex));
    dispatch(actions.updateExternalConfig(config));
  }, [props]); // Re-run when props change

  if (manifest) {
    return /*#__PURE__*/_react["default"].createElement("section", {
      className: "iiif-player"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react["default"].createElement(_MediaElementContainer["default"], {
      key: Math.random(),
      manifest: manifest
    }), /*#__PURE__*/_react["default"].createElement(_StructuredNav["default"], {
      manifest: manifest
    })));
  }

  if (error) {
    return /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
      message: error
    });
  }

  return /*#__PURE__*/_react["default"].createElement("p", null, "...Loading");
};

var _default = App;
exports["default"] = _default;