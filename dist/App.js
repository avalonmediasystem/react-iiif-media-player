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

var _MediaElementContainer = _interopRequireDefault(require("./containers/MediaElementContainer"));

var _StructuredNav = _interopRequireDefault(require("./components/StructuredNav"));

var _ErrorMessage = _interopRequireDefault(require("./components/ErrorMessage"));

var _reactRedux = require("react-redux");

var actions = _interopRequireWildcard(require("./actions"));

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  function App() {
    (0, _classCallCheck2["default"])(this, App);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).apply(this, arguments));
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
        return _react["default"].createElement("section", null, _react["default"].createElement(_MediaElementContainer["default"], {
          manifest: manifest
        }), _react["default"].createElement(_StructuredNav["default"], {
          manifest: manifest
        }));
      }

      if (error) {
        return _react["default"].createElement(_ErrorMessage["default"], {
          message: error
        });
      }

      return _react["default"].createElement("p", null, "...Loading");
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
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

exports["default"] = _default;