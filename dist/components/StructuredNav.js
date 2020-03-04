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
    return _this;
  }

  (0, _createClass2["default"])(StructuredNav, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.clickedUrl) {
        this.handleItemClick(this.props.clickedUrl);
      }
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(id) {
      var player = this.props.player;
      var timeFragment = (0, _iiifParser.getMediaFragment)(id);

      if (!timeFragment) {
        console.error('Error retrieving time fragment object from Canvas url in StructuredNav.js');
        return;
      } // Pause player (if not)


      if (!player.paused) {
        player.pause();
      } // Set the start time


      player.setCurrentTime(timeFragment.start); // Start the player

      player.play();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.manifest.structures) {
        return _react["default"].createElement(_List["default"], {
          items: this.manifest.structures
        });
      }

      return _react["default"].createElement("p", null, "There are no structures in the manifest.");
    }
  }]);
  return StructuredNav;
}(_react.Component);

StructuredNav.propTypes = {
  manifest: _propTypes["default"].object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    clickedUrl: state.nav.clickedUrl,
    player: state.player
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(StructuredNav);

exports["default"] = _default;