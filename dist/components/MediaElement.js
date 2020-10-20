"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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
var MediaElement = function MediaElement(props) {
  // Subscribe to Redux store variables
  var playerProp = (0, _reactRedux.useSelector)(function (state) {
    return state.player;
  });
  var instance = playerProp.instance,
      isPlaying = playerProp.isPlaying,
      captionOn = playerProp.captionOn,
      canvasIndex = playerProp.canvasIndex;
  var navProp = (0, _reactRedux.useSelector)(function (state) {
    return state.nav;
  });
  var startTime = navProp.startTime,
      clicked = navProp.clicked;
  var manifest = (0, _reactRedux.useSelector)(function (state) {
    return state.getManifest.manifest;
  }); // Create reference for dispatching actions

  var dispatch = (0, _reactRedux.useDispatch)(); // Component state variables

  var _useState = (0, _react.useState)(canvasIndex),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cIndex = _useState2[0],
      setCIndex = _useState2[1];

  var _useState3 = (0, _react.useState)({
    media: null,
    node: null,
    instance: null
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      meJSPlayer = _useState4[0],
      setMEJSPlayer = _useState4[1]; // Player related props from MediaElementContainer component


  var controls = props.controls,
      height = props.height,
      id = props.id,
      mediaType = props.mediaType,
      options = props.options,
      poster = props.poster,
      preload = props.preload,
      sources = props.sources,
      tracks = props.tracks,
      width = props.width;

  var _success = function success(media, node, instance) {
    var player = {
      media: media,
      node: node,
      instance: instance
    }; // Your action when media was successfully loaded

    console.log('Loaded successfully'); // Action reducer

    dispatch((0, _actions.playerInitialized)(instance)); // Register ended event

    media.addEventListener('ended', function (ended) {
      if (ended) {
        dispatch((0, _actions.resetClick)());
        handleEnded(player);
      }
    }); // Register caption change event

    media.addEventListener('captionschange', function (captions) {
      if (captions.detail.caption !== null) {
        dispatch((0, _actions.registerCaptionChange)(true));
      } else {
        dispatch((0, _actions.registerCaptionChange)(false));
      }
    });
    media.addEventListener('play', function () {
      dispatch((0, _actions.setPlayingStatus)(true));
    });
    media.addEventListener('pause', function () {
      dispatch((0, _actions.setPlayingStatus)(false));
    }); // Set component state

    setMEJSPlayer(player); // Set tracks

    (0, _mejsUtilityHelper.handleTracks)(instance, media, mediaType, captionOn); // Set the playhead at the desired start time

    instance.setCurrentTime(startTime);

    if (isPlaying) {
      instance.play();
    }
  };

  var _error = function error(media) {
    // Your action when media had an error loading
    console.log('Error loading');
  };

  var handleEnded = function handleEnded(player) {
    if ((0, _iiifParser.hasNextSection)(canvasIndex)) {
      dispatch((0, _actions.setCanvasIndex)(canvasIndex + 1));
      var newInstance = (0, _mejsUtilityHelper.switchMedia)(player, canvasIndex + 1, isPlaying, captionOn, manifest, true);
      dispatch((0, _actions.playerInitialized)(newInstance));
      setCIndex(cIndex + 1);
    }
  }; // Equivalent to componentDidMount() lifecycle method


  (0, _react.useEffect)(function () {
    var _global = global,
        MediaElementPlayer = _global.MediaElementPlayer;

    if (!MediaElementPlayer) {
      return;
    }

    var meConfigs = Object.assign({}, JSON.parse(options), {
      pluginPath: './static/media/',
      success: function success(media, node, instance) {
        return _success(media, node, instance);
      },
      error: function error(media, node) {
        return _error(media, node);
      },
      features: ['playpause', 'current', 'progress', 'duration', 'volume', 'quality', mediaType === 'video' ? 'tracks' : '', 'fullscreen'],
      qualityText: 'Stream Quality',
      toggleCaptionsButtonWhenOnlyOne: true
    });
    window.Hls = _hls["default"];
    new MediaElementPlayer(id, meConfigs);
  }, []); // Run the effect only at the first render
  // Equivalent getDerivedStateFromProps method responding to canvas changes

  (0, _react.useEffect)(function () {
    if (cIndex !== canvasIndex && clicked) {
      var newInstance = (0, _mejsUtilityHelper.switchMedia)(meJSPlayer, canvasIndex, isPlaying, captionOn, manifest, false);
      dispatch((0, _actions.playerInitialized)(newInstance));
      instance.setCurrentTime(startTime);
      setCIndex(canvasIndex);
    }
  }, [canvasIndex]); // Re-run the effect only when canvas changes

  var sourceTags = (0, _mejsUtilityHelper.createSourceTags)(JSON.parse(sources));
  var tracksTags = (0, _mejsUtilityHelper.createTrackTags)(JSON.parse(tracks));
  var mediaBody = "".concat(sourceTags.join('\n'), " ").concat(tracksTags.join('\n'));
  var mediaHtml = mediaType === 'video' ? "<video data-testid=\"video-element\" id=\"".concat(id, "\" width=\"").concat(width, "\" height=\"").concat(height, "\"").concat(poster ? " poster=".concat(poster) : '', "\n          ").concat(controls ? ' controls' : '').concat(preload ? " preload=\"".concat(preload, "\"") : '', ">\n        ").concat(mediaBody, "\n      </video>") : "<audio data-testid=\"audio-element\" id=\"".concat(id, "\" width=\"").concat(width, "\" ").concat(controls ? ' controls' : '').concat(preload ? " preload=\"".concat(preload, "\"") : '', ">\n        ").concat(mediaBody, "\n      </audio>");
  return /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: mediaHtml
    }
  });
};

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
var _default = MediaElement;
exports["default"] = _default;