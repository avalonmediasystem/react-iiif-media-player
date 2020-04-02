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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hls = _interopRequireDefault(require("hls.js"));

require("mediaelement");

require("../mediaelement/javascript/plugins/mejs-quality.js");

var _actions = require("../actions");

var _iiifParser = require("../services/iiif-parser");

var _mejsUtilityHelper = require("../services/mejs-utility-helper");

require("../mediaelement/stylesheets/mediaelementplayer.css");

require("../mediaelement/stylesheets/plugins/mejs-quality.scss");

require("../mediaelement/stylesheets/mejs-iiif-player-styles.scss");

// Import stylesheets
var MediaElement =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MediaElement, _Component);

  function MediaElement(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MediaElement);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MediaElement).call(this, props));
    _this.state = {
      canvasIndex: _this.props.canvasIndex,
      media: null,
      node: null,
      instance: null
    };
    return _this;
  }

  (0, _createClass2["default"])(MediaElement, [{
    key: "success",
    value: function success(media, node, instance) {
      var _this2 = this;

      var _this$props = this.props,
          startTime = _this$props.startTime,
          mediaType = _this$props.mediaType,
          captionOn = _this$props.captionOn; // Your action when media was successfully loaded

      console.log('Loaded successfully'); // Action reducer

      this.props.playerInitialized(instance); // Register ended event

      media.addEventListener('ended', function (ended) {
        if (ended) {
          _this2.props.resetClick();

          _this2.handleEnded(node, instance, media);
        }
      }); // Register caption change event

      media.addEventListener('captionschange', function (captions) {
        if (captions.detail.caption !== null) {
          _this2.props.registerCaptionChange(true);
        } else {
          _this2.props.registerCaptionChange(false);
        }
      });
      media.addEventListener('play', function () {
        _this2.props.setPlayingStatus(true);
      });
      media.addEventListener('pause', function () {
        _this2.props.setPlayingStatus(false);
      }); // Set tracks

      (0, _mejsUtilityHelper.handleTracks)(instance, media, mediaType, captionOn); // Set the playhead at the desired start time

      instance.setCurrentTime(startTime, this.props.resetClick());

      if (this.props.isPlaying) {
        instance.play();
      }

      this.setState({
        media: media,
        node: node,
        instance: instance
      });
    }
  }, {
    key: "error",
    value: function error(media) {
      // Your action when media had an error loading
      console.log('Error loading');
    }
  }, {
    key: "handleEnded",
    value: function handleEnded(node, instance, media) {
      var canvasIndex = this.props.canvasIndex;

      if ((0, _iiifParser.hasNextSection)(canvasIndex)) {
        this.props.setCanvasIndex(canvasIndex + 1);
        var newInstance = (0, _mejsUtilityHelper.switchMedia)(media, node, instance, this.props, true);
        this.props.playerInitialized(newInstance);
        this.setState({
          canvasIndex: canvasIndex + 1
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _global = global,
          MediaElementPlayer = _global.MediaElementPlayer;

      if (!MediaElementPlayer) {
        return;
      }

      var options = Object.assign({}, JSON.parse(this.props.options), {
        pluginPath: './static/media/',
        success: function success(media, node, instance) {
          return _this3.success(media, node, instance);
        },
        error: function error(media, node) {
          return _this3.error(media, node);
        },
        features: ['playpause', 'current', 'progress', 'duration', 'volume', 'quality', this.props.mediaType === 'video' ? 'tracks' : '', 'fullscreen'],
        qualityText: 'Stream Quality',
        toggleCaptionsButtonWhenOnlyOne: true
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
          tracks = JSON.parse(props.tracks),
          sourceTags = (0, _mejsUtilityHelper.createSourceTags)(sources),
          tracksTags = (0, _mejsUtilityHelper.createTrackTags)(tracks);
      var mediaBody = "".concat(sourceTags.join('\n'), "\n\t\t\t\t").concat(tracksTags.join('\n')),
          mediaHtml = props.mediaType === 'video' ? "<video data-testid=\"video-element\" id=\"".concat(props.id, "\" width=\"").concat(props.width, "\" height=\"").concat(props.height, "\"").concat(props.poster ? " poster=".concat(props.poster) : '', "\n\t\t\t\t\t  ").concat(props.controls ? ' controls' : '').concat(props.preload ? " preload=\"".concat(props.preload, "\"") : '', ">\n\t\t\t\t\t").concat(mediaBody, "\n\t\t\t\t</video>") : "<audio data-testid=\"audio-element\" id=\"".concat(props.id, "\" width=\"").concat(props.width, "\" ").concat(props.controls ? ' controls' : '').concat(props.preload ? " preload=\"".concat(props.preload, "\"") : '', ">\n\t\t\t\t\t").concat(mediaBody, "\n\t\t\t\t</audio>");
      return _react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: mediaHtml
        }
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var clicked = nextProps.clicked,
          canvasIndex = nextProps.canvasIndex;

      if (prevState.canvasIndex !== canvasIndex && clicked) {
        var media = prevState.media,
            node = prevState.node,
            instance = prevState.instance;
        var newInstance = (0, _mejsUtilityHelper.switchMedia)(media, node, instance, nextProps, false);
        nextProps.playerInitialized(newInstance);
        return {
          canvasIndex: nextProps.canvasIndex
        };
      }

      return null;
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
var mapDispatchToProps = {
  playerInitialized: function playerInitialized(player, canvasIndex) {
    return (0, _actions.playerInitialized)(player, canvasIndex);
  },
  registerCaptionChange: function registerCaptionChange(captionOn) {
    return (0, _actions.registerCaptionChange)(captionOn);
  },
  resetClick: function resetClick() {
    return (0, _actions.resetClick)();
  },
  setPlayingStatus: function setPlayingStatus(isPlaying) {
    return (0, _actions.setPlayingStatus)(isPlaying);
  },
  setCanvasIndex: function setCanvasIndex(index) {
    return (0, _actions.setCanvasIndex)(index);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    player: state.player.instance,
    isPlaying: state.player.isPlaying,
    captionOn: state.player.captionOn,
    canvasIndex: state.player.canvasIndex,
    startTime: state.nav.startTime,
    manifest: state.getManifest.manifest,
    clicked: state.nav.clicked
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MediaElement);

exports["default"] = _default;