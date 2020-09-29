"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _MediaElement = _interopRequireDefault(require("../components/MediaElement"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorMessage = _interopRequireDefault(require("../components/ErrorMessage"));

var _iiifParser = require("../services/iiif-parser");

var _reactRedux = require("react-redux");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MediaElementContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MediaElementContainer, _Component);

  var _super = _createSuper(MediaElementContainer);

  function MediaElementContainer() {
    var _this;

    (0, _classCallCheck2["default"])(this, MediaElementContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
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
          options: JSON.stringify(options)
        }));
      } else if (error) {
        return /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
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