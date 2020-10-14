"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _MediaElement = _interopRequireDefault(require("../components/MediaElement"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorMessage = _interopRequireDefault(require("../components/ErrorMessage"));

var _iiifParser = require("../services/iiif-parser");

var _reactRedux = require("react-redux");

var MediaElementContainer = function MediaElementContainer(props) {
  // Subscribe to Redux store variable
  var canvasIndex = (0, _reactRedux.useSelector)(function (state) {
    return state.player.canvasIndex;
  }); // Component state variables

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      manifest = _useState2[0],
      setManifest = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      ready = _useState4[0],
      setReady = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      sources = _useState6[0],
      setSources = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      tracks = _useState8[0],
      setTracks = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      mediaType = _useState10[0],
      setMediaType = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  (0, _react.useEffect)(function () {
    setManifest(props.manifest);

    if (manifest) {
      var _getMediaInfo = (0, _iiifParser.getMediaInfo)(manifest, canvasIndex),
          _sources = _getMediaInfo.sources,
          _mediaType = _getMediaInfo.mediaType,
          _error = _getMediaInfo.error;

      setTracks((0, _iiifParser.getTracks)());
      setSources(_sources);
      setMediaType(_mediaType);
      setError(_error);
      _error ? setReady(false) : setReady(true);
    }
  }, [manifest]); // Re-run the effect when manifest changes

  if (ready) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      "data-testid": "mediaelement",
      id: "mediaelement"
    }, /*#__PURE__*/_react["default"].createElement(_MediaElement["default"], {
      id: "avln-mediaelement-component",
      mediaType: mediaType,
      preload: "auto",
      controls: true,
      width: manifest.width || 480,
      height: manifest.height || 360,
      poster: "",
      crossorigin: "anonymous",
      sources: JSON.stringify(sources),
      tracks: JSON.stringify(tracks),
      options: JSON.stringify({})
    }));
  } else if (error) {
    return /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
      message: error
    });
  } else {
    return null;
  }
};

MediaElementContainer.propTypes = {
  manifest: _propTypes["default"].object
};
var _default = MediaElementContainer;
exports["default"] = _default;