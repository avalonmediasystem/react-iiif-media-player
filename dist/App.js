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

var _MediaElementContainer = _interopRequireDefault(require("./containers/MediaElementContainer"));

var _StructuredNav = _interopRequireDefault(require("./components/StructuredNav"));

var _ErrorMessage = _interopRequireDefault(require("./components/ErrorMessage"));

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("./actions"));

require("./App.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var App = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    _this.state = {
      manifest: _this.props.iiifManifest
    };
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          iiifManifest = _this$props.iiifManifest,
          iiifManifestUrl = _this$props.iiifManifestUrl;

      if (iiifManifest) {
        return this.props.fetchManifestSuccess(iiifManifest);
      }

      this.props.updateExternalConfig(this.props.config);
      this.props.getRemoteManifest(iiifManifestUrl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$getManife = this.props.getManifest,
          manifest = _this$props$getManife.manifest,
          error = _this$props$getManife.error;

      if (manifest) {
        return /*#__PURE__*/_react["default"].createElement("section", {
          className: "iiif-player"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement(_MediaElementContainer["default"], {
          key: Math.random(),
          manifest: manifest
        }), /*#__PURE__*/_react["default"].createElement(_StructuredNav["default"], {
          manifest: manifest
        })));
      }

      if (error) {
        return /*#__PURE__*/_react["default"].createElement(_ErrorMessage["default"], {
          message: error
        });
      }

      return /*#__PURE__*/_react["default"].createElement("p", null, "...Loading");
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.iiifManifest !== prevState.manifest) {
        nextProps.fetchManifestSuccess(nextProps.iiifManifest);
        nextProps.setCanvasIndex(nextProps.canvasIndex);
        return {
          manifest: nextProps.iiifManifest
        };
      }

      return null;
    }
  }]);
  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    getManifest: state.getManifest
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchManifestSuccess: function fetchManifestSuccess(manifest) {
      return dispatch(actions.fetchManifestSuccess(manifest));
    },
    getRemoteManifest: function getRemoteManifest(url) {
      return dispatch(actions.getRemoteManifest(url));
    },
    updateExternalConfig: function updateExternalConfig(config) {
      return dispatch(actions.updateExternalConfig(config));
    },
    setCanvasIndex: function setCanvasIndex(canvasIndex) {
      return dispatch(actions.setCanvasIndex(canvasIndex));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports["default"] = _default;