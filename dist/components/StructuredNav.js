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

var _List = _interopRequireDefault(require("./List"));

var _iiifParser = require("../services/iiif-parser");

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var StructuredNav =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(StructuredNav, _Component);

  function StructuredNav(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StructuredNav);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StructuredNav).call(this, props));
    _this.manifest = _this.props.manifest;
    _this.state = {
      startTime: null
    };
    return _this;
  }

  (0, _createClass2["default"])(StructuredNav, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          clickedUrl = _this$props.clickedUrl,
          player = _this$props.player;

      if (clickedUrl != prevProps.clickedUrl) {
        this.handleItemClick(clickedUrl);
      }

      var startTime = this.state.startTime;

      if (startTime) {
        // Set the start time
        player.setCurrentTime(startTime);
      }
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(id) {
      var _this$props2 = this.props,
          player = _this$props2.player,
          canvases = _this$props2.canvases;
      var canvasInManifest = canvases.find(function (c) {
        return (0, _iiifParser.getCanvasId)(id) === c.canvasId;
      });
      var canvasIndex = canvases.indexOf(canvasInManifest);
      var canvasSources = null;

      if (canvasInManifest) {
        canvasSources = canvasInManifest.canvasSources;
      } // Go to next section


      if (!canvasSources.includes(player.getSrc())) {
        this.props.swapMediaElement(canvasIndex);
      }

      var timeFragment = (0, _iiifParser.getMediaFragment)(id); // Invalid time fragment

      if (!timeFragment) {
        console.error('Error retrieving time fragment object from Canvas url in StructuredNav.js');
        return;
      }

      this.setState({
        startTime: timeFragment.start
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.manifest.structures) {
        return _react["default"].createElement("div", {
          "data-testid": "structured-nav"
        }, _react["default"].createElement(_List["default"], {
          items: this.manifest.structures
        }));
      }

      return _react["default"].createElement("p", null, "There are no structures in the manifest.");
    }
  }]);
  return StructuredNav;
}(_react.Component);

StructuredNav.propTypes = {
  manifest: _propTypes["default"].object.isRequired
};
var mapDispatchToProps = {
  swapMediaElement: _actions.swapMediaElement
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    clickedUrl: state.nav.clickedUrl,
    player: state.player,
    canvases: state.getManifest.canvases
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StructuredNav);

exports["default"] = _default;