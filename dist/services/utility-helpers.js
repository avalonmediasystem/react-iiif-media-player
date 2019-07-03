"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UtilityHelpers =
/*#__PURE__*/
function () {
  function UtilityHelpers() {
    (0, _classCallCheck2["default"])(this, UtilityHelpers);
    this.errorClass = 'error-message';
    this.elementTitles = this.getElementTitles();
  }

  (0, _createClass2["default"])(UtilityHelpers, [{
    key: "getElementTitles",
    value: function getElementTitles() {
      return {
        alertElId: 'alert-message',
        currentManifestId: 'manifest-current',
        defaultManifest: 'lunchroom_manners_v2.json',
        manifestTitle: 'current-manifest-title',
        manifestUrlForm: 'manifest-url-form',
        mountElId: 'iiif-standalone-player-mount',
        playerId: 'iiif-av-player',
        playerWrapperId: 'iiif-player-wrapper',
        sourceElId: 'data-iiifav-source',
        structureElId: 'iiif-structure-wrapper',
        urlTextInputId: 'manifest-url'
      };
    }
    /**
     * Helper method to parse label field of manifests
     * @param  {Object} label Label object
     * @return {string} label string
     */

  }, {
    key: "getLabel",
    value: function getLabel(obj) {
      var labelText = '';

      if (obj.hasOwnProperty('@none')) {
        labelText = obj['@none'][0];
      } else if (obj.hasOwnProperty('en')) {
        labelText = obj['en'][0];
      }

      return labelText;
    }
  }]);
  return UtilityHelpers;
}();

exports["default"] = UtilityHelpers;