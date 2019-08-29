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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("../actions"));

var _hls = _interopRequireDefault(require("hls.js"));

require("mediaelement");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("mediaelement/build/mediaelementplayer.min.css");

// Import stylesheet and shims
var MediaElement =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MediaElement, _Component);

  function MediaElement(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MediaElement);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MediaElement).call(this, props));
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(MediaElement, [{
    key: "success",
    value: function success(media, node, instance) {
      // Your action when media was successfully loaded
      console.log('Loaded successfully'); // Action reducer

      this.props.playerInitialized(instance);
    }
  }, {
    key: "error",
    value: function error(media) {
      // Your action when media had an error loading
      console.log('Error loading');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _global = global,
          MediaElementPlayer = _global.MediaElementPlayer;

      if (!MediaElementPlayer) {
        return;
      }

      var options = Object.assign({}, JSON.parse(this.props.options), {
        pluginPath: './static/media/',
        success: function success(media, node, instance) {
          return _this2.success(media, node, instance);
        },
        error: function error(media, node) {
          return _this2.error(media, node);
        }
      });
      window.Hls = _hls["default"];
      this.setState({
        player: new MediaElementPlayer(this.props.id, options)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.player) {
        this.state.player.remove();
        this.setState({
          player: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props,
          sources = JSON.parse(props.sources),
          sourceTags = [],
          tracksTags = [];

      for (var i = 0, total = sources.length; i < total; i++) {
        var source = sources[i];
        sourceTags.push("<source src=\"".concat(source.src, "\" type=\"").concat(source.type, "\">"));
      }

      var mediaBody = "".concat(sourceTags.join('\n'), "\n\t\t\t\t").concat(tracksTags.join('\n')),
          mediaHtml = props.mediaType === 'video' ? "<video data-testid=\"video-element\" id=\"".concat(props.id, "\" width=\"").concat(props.width, "\" height=\"").concat(props.height, "\"").concat(props.poster ? " poster=".concat(props.poster) : '', "\n\t\t\t\t\t").concat(props.controls ? ' controls' : '').concat(props.preload ? " preload=\"".concat(props.preload, "\"") : '', ">\n\t\t\t\t\t").concat(mediaBody, "\n\t\t\t\t</video>") : "<audio data-testid=\"audio-element\" id=\"".concat(props.id, "\" width=\"").concat(props.width, "\" controls>\n\t\t\t\t\t").concat(mediaBody, "\n\t\t\t\t</audio>");
      return _react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: mediaHtml
        }
      });
    }
  }]);
  return MediaElement;
}(_react.Component);

MediaElement.propTypes = {
  id: _propTypes["default"].string,
  mediaType: _propTypes["default"].string,
  preload: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  poster: _propTypes["default"].string,
  sources: _propTypes["default"].string,
  options: _propTypes["default"].string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    playerInitialized: function playerInitialized(player) {
      return dispatch(actions.playerInitialized(player));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(MediaElement);

exports["default"] = _default;