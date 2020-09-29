"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("./List"));

var _iiifParser = require("../services/iiif-parser");

var _actions = require("../actions");

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StructuredNav = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StructuredNav, _Component);

  var _super = _createSuper(StructuredNav);

  function StructuredNav(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StructuredNav);
    _this = _super.call(this, props);
    _this.manifest = _this.props.manifest;
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(StructuredNav, [{
    key: "render",
    value: function render() {
      var manifest = this.props.manifest;

      if (manifest.structures) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-testid": "structured-nav",
          className: "structured-nav",
          key: Math.random()
        }, manifest.structures[0] && manifest.structures[0].items ? manifest.structures[0].items.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(_List["default"], {
            items: [item],
            key: index,
            isChild: false
          });
        }) : null);
      }

      return /*#__PURE__*/_react["default"].createElement("p", null, "There are no structures in the manifest.");
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var player = nextProps.player,
          clickedUrl = nextProps.clickedUrl,
          canvases = nextProps.canvases,
          clicked = nextProps.clicked,
          canvasIndex = nextProps.canvasIndex;

      if (clicked) {
        var canvasInManifest = canvases.find(function (c) {
          return (0, _iiifParser.getCanvasId)(clickedUrl) === c.canvasId;
        });
        var currentCanvasIndex = canvases.indexOf(canvasInManifest);
        var timeFragment = (0, _iiifParser.getMediaFragment)(clickedUrl); // Invalid time fragment

        if (!timeFragment) {
          console.error('Error retrieving time fragment object from Canvas url in StructuredNav.js');
          return;
        } // When clicked structure item is not in the current canvas


        if (canvasIndex !== currentCanvasIndex) {
          nextProps.switchCanvas(currentCanvasIndex, timeFragment.start);
        } else {
          // Set the playhead at the start of the time fragment
          player.setCurrentTime(timeFragment.start);
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