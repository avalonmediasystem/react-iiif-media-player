"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvasesInManifest = canvasesInManifest;
exports.filterVisibleRangeItem = filterVisibleRangeItem;
exports.getChildCanvases = getChildCanvases;
exports.getChoiceItems = getChoiceItems;
exports.getLabelValue = getLabelValue;
exports.getMediaFragment = getMediaFragment;
exports.getStoreManifest = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _utilityHelpers = _interopRequireDefault(require("./utility-helpers"));

var _manifesto = _interopRequireDefault(require("manifesto.js"));

var _getReduxManifest = require("./get-redux-manifest");

// Allow local access to the Redux data store within this module
var reduxManifest = null;

var getStoreManifest = function getStoreManifest() {
  if (!reduxManifest) {
    reduxManifest = (0, _getReduxManifest.getReduxManifest)();
  }

  return reduxManifest;
};
/**
 * Does the manifest have a canvases array?
 * @function IIIFParser#canvasesInManifest
 * @return {boolean} - Does manifest have a canvases array
 **/


exports.getStoreManifest = getStoreManifest;

function canvasesInManifest(manifest) {
  return _manifesto["default"].create(manifest).getSequences()[0].getCanvases().length > 0;
}
/**
 * Check if item's behavior is set to a value which should hide it
 * @param {Object} item
 */


function filterVisibleRangeItem(item) {
  var behavior = _manifesto["default"].create(getStoreManifest()).getRangeById(item.id).getBehavior();

  if (behavior && behavior.value === 'no-nav') {
    return null;
  }

  return item;
}

function getChildCanvases(rangeId) {
  var rangeCanvases = [];

  try {
    rangeCanvases = _manifesto["default"].create(getStoreManifest()).getRangeById(rangeId).getCanvasIds();
  } catch (e) {
    console.log('error fetching range canvases', e);
  }

  return rangeCanvases;
}
/**
 * Get contents of 'items[]' contained within the child 'body' property
 * Assuming these are choices of file type (ie. .mp4 / .webm)
 * // TODO: Should validate extra on 'body.type' === 'Choice'?
 * @param {Object} manifest IIIF Manifest
 * @returns {Array.<Object>} array of file choice objects
 */
// TODO: Not currently being used... skipping the manifestojs parsing


function getChoiceItems(manifest) {
  var searchItems = function searchItems(items) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.body) {
          if (item.body.type === 'Choice') {
            // Return array of file choices
            return item.body.items;
          }

          if (['Video', 'Audio'].indexOf(item.body.type) > -1) {
            // Return the 'body' object, as an array
            return [item.body];
          }
        } else if (item.items) {
          return searchItems(item.items);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var choiceItems = searchItems(manifest.items);
  return choiceItems || [];
}
/**
 * Parse the label value from a manifest item
 * See https://iiif.io/api/presentation/3.0/#label
 * @param {Object} label
 */


function getLabelValue(label) {
  if (label && (0, _typeof2["default"])(label) === 'object') {
    // English
    if (label.hasOwnProperty('@en')) {
      return label['@en'].length > 0 ? label['@en'][0] : '';
    } // None


    if (label.hasOwnProperty('@none')) {
      return label['@none'].length > 0 ? label['@none'][0] : '';
    }
  } else if (typeof label === 'string') {
    return label;
  }

  return 'Label could not be parsed';
}
/**
 * Takes a uri with a media fragment that looks like #=120,134 and returns an object
 * with start/stop in seconds and the duration in milliseconds
 * @function IIIFParser#getMediaFragment
 * @param {string} uri - Uri value
 * @return {Object} - Representing the media fragment ie. { start: "3287.0", stop: "3590.0" }, or undefined
 */


function getMediaFragment(uri) {
  if (uri !== undefined) {
    var fragment = uri.split('#t=')[1];

    if (fragment !== undefined) {
      var splitFragment = fragment.split(',');
      return {
        start: splitFragment[0],
        stop: splitFragment[1]
      };
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}