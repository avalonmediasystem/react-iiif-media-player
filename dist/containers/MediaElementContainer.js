"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _MediaElement = _interopRequireDefault(require("../components/MediaElement"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorMessage = _interopRequireDefault(require("../components/ErrorMessage"));

var _iiifParser = require("../services/iiif-parser");

var _reactRedux = require("react-redux");

var MediaElementContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MediaElementContainer, _Component);

  function MediaElementContainer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, MediaElementContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(MediaElementContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      manifest: _this.props.manifest,
      ready: false,
      sources: [],
      tracks: [],
      mediaType: null,
      error: null
    });
    return _this;
  }

  (0, _createClass2["default"])(MediaElementContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          manifest = _this$props.manifest,
          canvasIndex = _this$props.canvasIndex;

      var _getMediaInfo = (0, _iiifParser.getMediaInfo)(manifest, canvasIndex),
          sources = _getMediaInfo.sources,
          mediaType = _getMediaInfo.mediaType,
          error = _getMediaInfo.error;

      var tracks = (0, _iiifParser.getTracks)();
      this.setState({
        sources: sources,
        mediaType: mediaType,
        tracks: tracks,
        ready: error ? false : true,
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          manifest = _this$state.manifest,
          ready = _this$state.ready,
          sources = _this$state.sources,
          tracks = _this$state.tracks,
          mediaType = _this$state.mediaType,
          error = _this$state.error;
      var options = {};

      if (ready) {
        return _react["default"].createElement("div", {
          "data-testid": "mediaelement",
          id: "mediaelement"
        }, _react["default"].createElement(_MediaElement["default"], {
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
          options: JSON.stringify(options)
        }));
      } else if (error) {
        return _react["default"].createElement(_ErrorMessage["default"], {
          message: error
        });
      }

      return null;
    }
  }]);
  return MediaElementContainer;
}(_react.Component);

MediaElementContainer.propTypes = {
  manifest: _propTypes["default"].object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    canvasIndex: state.player.canvasIndex
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(MediaElementContainer);

exports["default"] = _default;