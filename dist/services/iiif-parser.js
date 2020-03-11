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
exports.getCanvas = getCanvas;
exports.getSources = getSources;
exports.getMediaType = getMediaType;
exports.hasNextSection = hasNextSection;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _utilityHelpers = _interopRequireDefault(require("./utility-helpers"));

var _manifesto = _interopRequireDefault(require("manifesto.js"));

var _getReduxManifest = require("./get-redux-manifest");

/**
 * Does the manifest have a canvases array?
 * @function IIIFParser#canvasesInManifest
 * @return {boolean} - Does manifest have a canvases array
 **/
function canvasesInManifest(manifest) {
  var canvases = _manifesto["default"].create(manifest).getSequences()[0].getCanvases().map(function (canvas) {
    var sources = canvas.getContent()[0].getBody().map(function (source) {
      return source.id;
    });
    return {
      canvasId: canvas.id,
      canvasSources: sources
    };
  });

  return canvases;
}
/**
 * Check if item's behavior is set to a value which should hide it
 * @param {Object} item
 */


function filterVisibleRangeItem(item) {
  var behavior = _manifesto["default"].create((0, _getReduxManifest.getReduxManifest)()).getRangeById(item.id).getViewingHint();

  if (behavior && behavior.value === 'no-nav') {
    return null;
  }

  return item;
}

function getChildCanvases(rangeId) {
  var rangeCanvases = [];

  try {
    rangeCanvases = _manifesto["default"].create((0, _getReduxManifest.getReduxManifest)()).getRangeById(rangeId).getCanvasIds();
  } catch (e) {
    console.log('error fetching range canvases', e);
  }

  return rangeCanvases;
}
/**
 * Get contents of 'items[]' contained within the child 'body' property
 * Assuming these are choices of file type (ie. .mp4 / .webm)
 * @param {Object} manifest IIIF Manifest
 * @param {Number} canvasIndex Index of the current canvas in manifest
 * @returns {Array.<Object>} array of file choice objects
 */


function getChoiceItems(manifest, canvasIndex) {
  var choiceItems = [];

  try {
    choiceItems = _manifesto["default"].create(manifest).getSequences()[0].getCanvases()[canvasIndex].getContent()[0].getBody();
  } catch (e) {}

  return choiceItems;
}
/**
 * Parse the label value from a manifest item
 * See https://iiif.io/api/presentation/3.0/#label
 * @param {Object} label
 */


function getLabelValue(label) {
  if (label && (0, _typeof2["default"])(label) === 'object') {
    // English
    if (label.hasOwnProperty('en')) {
      return label['en'].length > 0 ? label['en'][0] : '';
    } // None


    if (label.hasOwnProperty('none')) {
      return label['none'].length > 0 ? label['none'][0] : '';
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

function getCanvas(uri) {
  if (uri !== undefined) {
    return uri.split('#t=')[0];
  }
}

function getSources(choiceItems) {
  var sources = choiceItems.map(function (item) {
    return {
      src: item.id,
      // TODO: make type more generic, possibly use mime-db
      format: item.getFormat().value
    };
  });
  return sources;
}

function getMediaType(choiceItems) {
  var allTypes = choiceItems.map(function (item) {
    return item.getType().value;
  });
  var uniqueTypes = allTypes.filter(function (t, index) {
    return allTypes.indexOf(t) === index;
  });

  if (uniqueTypes.length === 1) {
    return uniqueTypes[0];
  } // Default type if there are different types


  return 'audio';
}

function hasNextSection(index) {
  var canvasIDs = _manifesto["default"].create((0, _getReduxManifest.getReduxManifest)()).getSequences()[0].getCanvases().map(function (canvas) {
    return canvas.id;
  });

  return canvasIDs.length - 1 > index ? true : false;
}