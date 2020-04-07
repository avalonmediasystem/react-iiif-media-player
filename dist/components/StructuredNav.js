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
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(StructuredNav, [{
    key: "render",
    value: function render() {
      var manifest = this.props.manifest;

      if (manifest.structures) {
        return _react["default"].createElement("div", {
          "data-testid": "structured-nav",
          className: "structured-nav"
        }, _react["default"].createElement(_List["default"], {
          items: manifest.structures
        }));
      }

      return _react["default"].createElement("p", null, "There are no structures in the manifest.");
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var player = nextProps.player,
          clickedUrl = nextProps.clickedUrl,
          canvases = nextProps.canvases,
          clicked = nextProps.clicked;

      if (clicked) {
        var canvasInManifest = canvases.find(function (c) {
          return (0, _iiifParser.getCanvasId)(clickedUrl) === c.canvasId;
        });
        var canvasIndex = canvases.indexOf(canvasInManifest);
        var canvasSources = null;

        if (canvasInManifest) {
          canvasSources = canvasInManifest.canvasSources;
        }

        var timeFragment = (0, _iiifParser.getMediaFragment)(clickedUrl); // Invalid time fragment

        if (!timeFragment) {
          console.error('Error retrieving time fragment object from Canvas url in StructuredNav.js');
          return;
        } // Clicked fragment is not in the current canvas => load relevant canvas


        if (!canvasSources.includes(player.getSrc())) {
          nextProps.switchCanvas(canvasIndex, timeFragment.start);
        } else {
          // Set the playhead at the start of the time fragment
          player.setCurrentTime(timeFragment.start, nextProps.resetClick());
        }

        return null;
      }

      return null;
    }
  }]);
  return StructuredNav;
}(_react.Component);

StructuredNav.propTypes = {
  manifest: _propTypes["default"].object.isRequired
};
var mapDispatchToProps = {
  switchCanvas: _actions.switchCanvas,
  resetClick: _actions.resetClick
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    clickedUrl: state.nav.clickedUrl,
    player: state.player.instance,
    canvases: state.getManifest.canvases,
    clicked: state.nav.clicked,
    canvasIndex: state.player.canvasIndex
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StructuredNav);

exports["default"] = _default;