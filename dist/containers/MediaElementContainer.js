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

var _manifesto = _interopRequireDefault(require("manifesto.js"));

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
      manifestUrl: _this.props.manifestUrl,
      manifest: _this.props.manifest,
      ready: false,
      sources: [],
      error: null
    });
    return _this;
  }

  (0, _createClass2["default"])(MediaElementContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var manifest = this.state.manifest;
      var choiceItems = [];

      try {
        choiceItems = _manifesto["default"].create(manifest).getSequences()[0].getCanvases()[0].getContent()[0].getBody();
      } catch (e) {}

      this.prepSources(manifest, choiceItems);
    }
  }, {
    key: "getSources",
    value: function getSources(choiceItems) {
      var sources = choiceItems.map(function (item) {
        return {
          src: item.id,
          // TODO: make type more generic, possibly use mime-db
          type: 'audio/mp4'
        };
      });
      return sources;
    }
  }, {
    key: "prepSources",
    value: function prepSources(manifest, choiceItems) {
      if (choiceItems.length === 0) {
        this.setState({
          error: 'No media choice items found in manifest'
        });
        return;
      }

      var sources = this.getSources(choiceItems);
      this.setState({
        ready: true,
        sources: sources
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          manifest = _this$state.manifest,
          ready = _this$state.ready,
          sources = _this$state.sources,
          error = _this$state.error;
      var options = {};

      if (ready) {
        return _react["default"].createElement(_MediaElement["default"], {
          id: "avln-mediaelement-component",
          mediaType: "video",
          preload: "auto",
          controls: true,
          width: manifest.width || 480,
          height: manifest.height || 360,
          poster: "",
          crossorigin: "anonymous",
          sources: JSON.stringify(sources),
          options: JSON.stringify(options)
        });
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
var _default = MediaElementContainer;
exports["default"] = _default;