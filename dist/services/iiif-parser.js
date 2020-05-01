"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvasesInManifest = canvasesInManifest;
exports.filterVisibleRangeItem = filterVisibleRangeItem;
exports.getChildCanvases = getChildCanvases;
exports.getMediaInfo = getMediaInfo;
exports.getTracks = getTracks;
exports.getLabelValue = getLabelValue;
exports.getMediaFragment = getMediaFragment;
exports.getCanvasId = getCanvasId;
exports.hasNextSection = hasNextSection;
exports.isAtTop = isAtTop;
exports.getSectionURI = getSectionURI;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _manifesto = _interopRequireDefault(require("manifesto.js"));

var _getReduxManifest = require("./get-redux-manifest");

/**
 * Get all the canvases in manifest
 * @function IIIFParser#canvasesInManifest
 * @return {Object} array of canvases in manifest
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
  var behavior = (0, _getReduxManifest.getReduxManifest)().getRangeById(item.id).getBehavior();

  if (behavior && behavior.value === 'no-nav') {
    return null;
  }

  return item;
}

function getChildCanvases(rangeId) {
  var rangeCanvases = [];

  try {
    rangeCanvases = (0, _getReduxManifest.getReduxManifest)().getRangeById(rangeId).getCanvasIds();
  } catch (e) {
    console.log('error fetching range canvases', e);
  }

  return rangeCanvases;
}
/**
 * Get sources and media type for a given canvas
 * If there are no items, an error is returned (user facing error)
 * @param {Object} manifest IIIF Manifest
 * @param {Number} canvasIndex Index of the current canvas in manifest
 * @returns {Array.<Object>} array of file choice objects
 */


function getMediaInfo(manifest, canvasIndex) {
  var choiceItems = [];

  try {
    choiceItems = _manifesto["default"].create(manifest).getSequences()[0].getCanvases()[canvasIndex].getContent()[0].getBody();
  } catch (e) {
    console.log(e);
  }

  if (choiceItems.length === 0) {
    return {
      error: 'No media sources found'
    };
  } else {
    try {
      var sources = choiceItems.map(function (item) {
        return {
          src: item.id,
          // TODO: make type more generic, possibly use mime-db
          format: item.getFormat() ? item.getFormat().value : 'application/x-mpegurl',
          quality: item.getLabel()[0] ? item.getLabel()[0].value : 'auto'
        };
      });
      var allTypes = choiceItems.map(function (item) {
        return item.getType().value;
      });
      var uniqueTypes = allTypes.filter(function (t, index) {
        return allTypes.indexOf(t) === index;
      }); // Default type if there are different types

      var mediaType = uniqueTypes.length === 1 ? uniqueTypes[0] : 'video';
      return {
        sources: sources,
        mediaType: mediaType,
        error: null
      };
    } catch (e) {
      return {
        error: 'Manifest cannot be parsed.'
      };
    }
  }
}
/**
 * Get captions in manifest
 */


function getTracks() {
  var seeAlso = (0, _getReduxManifest.getReduxManifest)().getSeeAlso();

  if (seeAlso !== undefined) {
    return seeAlso;
  }

  return [];
}
/**
 * Parse the label value from a manifest item
 * See https://iiif.io/api/presentation/3.0/#label
 * @param {Object} label
 */


function getLabelValue(label) {
  if (label && (0, _typeof2["default"])(label) === 'object') {
    var labelKeys = Object.keys(label);

    if (labelKeys && labelKeys.length > 0) {
      // Get the first key's first value
      var firstKey = labelKeys[0];
      return label[firstKey].length > 0 ? label[firstKey][0] : '';
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
/**
 * Get the canvas ID from the URI of the clicked structure item
 * @param {String} uri URI of the item clicked in structure
 */


function getCanvasId(uri) {
  if (uri !== undefined) {
    return uri.split('#t=')[0];
  }
}
/**
 * Determine there is a next section to play when the current section ends
 * @param {Number} index index of the canvas in manifest
 */


function hasNextSection(index) {
  var canvasIDs = (0, _getReduxManifest.getReduxManifest)().getSequences()[0].getCanvases().map(function (canvas) {
    return canvas.id;
  });
  return canvasIDs.length - 1 > index ? true : false;
}
/**
 * Identify the item at the top of the structure
 * @param {Object} item
 */


function isAtTop(item) {
  var behavior = (0, _getReduxManifest.getReduxManifest)().getRangeById(item.id).getBehavior();

  if (behavior && behavior.value === 'top') {
    return true;
  }

  return false;
}
/**
 * Construct url for the starting time of canvas
 * @param {Object} item
 */


function getSectionURI(item) {
  if (item.items && item.items.length > 0) {
    var canvas = item.items[0].items;

    if (canvas[0]) {
      var canvasUri = getCanvasId(canvas[0].id);
      return "".concat(canvasUri, "#t=0,");
    }
  }
}