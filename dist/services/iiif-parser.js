"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utilityHelpers = _interopRequireDefault(require("./utility-helpers"));

/**
 * @class IIIFParser
 * @classdesc Class representing parsing functionality of an IIIF Manifest
 */
var IIIFParser =
/*#__PURE__*/
function () {
  function IIIFParser() {
    (0, _classCallCheck2["default"])(this, IIIFParser);
    this.utilityHelpers = new _utilityHelpers["default"]();
  }
  /**
   * Build a manifest map helper object for parsing
   * @function IIIFParser#buildManifestMap
   * @param {Object} manifest - Manifest object
   * @returns {Object} obj - A generated helper map object with information about current manifest
   */


  (0, _createClass2["default"])(IIIFParser, [{
    key: "buildManifestMap",
    value: function buildManifestMap(manifest) {
      var obj = {
        hasCanvases: false,
        hasMultipleCanvases: false,
        hasSequences: false,
        isAudio: false,
        isVideo: false
      };
      obj.hasSequences = !!manifest.sequences;

      if (obj.hasSequences === true) {
        obj.hasCanvases = !!manifest.sequences[0].canvases;

        if (obj.hasCanvases === true) {
          obj.hasMultipleCanvases = manifest.sequences[0].canvases.length > 1;
        }
      }

      return obj;
    }
    /**
     * Generate a structure nested list link
     * @function IIIFParser#buildStructureLink
     * @param {Object} item - A item object
     * @returns {string} structureLink - HTML string for the anchor link
     */

  }, {
    key: "buildStructureLink",
    value: function buildStructureLink(item) {
      var id = item.items[0].id;
      var structureLink = "<a href=\"".concat(id, "\">").concat(item.label, "</a>");
      return structureLink;
    }
    /**
     * Does the manifest have a canvases array?
     * @function IIIFParser#canvasesInManifest
     * @return {boolean} - Does manifest have a canvases array
     **/

  }, {
    key: "canvasesInManifest",
    value: function canvasesInManifest(manifest) {
      return manifest.sequences && manifest.sequences[0].canvases;
    }
    /**
     * Recurse the manifest 'structures' array and creates an html tree of section links
     * @function IIIFParser#createStructure
     * @param {object} items - An 'items' array in the manifest, under 'structures' array
     * @param {string[]} list - Markup temporary storage array while building the nested unordered lists
     * @param {boolean} newUl - Flag whether to write a nested unordered list
     * @return {string} - HTML string containing a nested unordered list and links to section content
     */

  }, {
    key: "createStructure",
    value: function createStructure(items) {
      var _this = this;

      var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var newUl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (newUl) {
        list.push('<ul>');
      }

      items.forEach(function (item, index) {
        if (item.type === 'Range' && item.hasOwnProperty('items')) {
          var subMembers = item.items; // Multiple items, create a new <ul>

          if (subMembers.length > 1 || subMembers[0].type === 'Range') {
            newUl = true;
            list.push("<li>".concat(item.label));

            _this.createStructure(subMembers, list, newUl);

            list.push("</li>");
          } // Create a link; don't send child items object back in


          if (subMembers.length === 1 && subMembers[0].type === 'Canvas') {
            var structureLink = _this.buildStructureLink(item);

            list.push("<li>".concat(structureLink, "</li>"));
          }
        }
      });

      if (newUl) {
        list.push('</ul>');
      }

      return list.join('');
    }
    /**
     * Parse what type of content the file is
     * @function IIIFParser#determinePlayerType
     * @param {object} contentObj - The content item for which to find type
     * @returns {string} 'Audio' or 'Video' text (for now)
     */

  }, {
    key: "determinePlayerType",
    value: function determinePlayerType(contentObj) {
      var body = lookForBody(contentObj);

      function lookForBody(obj) {
        if (obj.body) {
          return obj.body;
        } else if (obj.items) {
          return lookForBody(obj.items[0]);
        }
      }

      return body[0].items[0].type;
    }
    /**
     * Get a canvas object from it's id
     * @param  {[type]} canvasId [description]
     * @return {[type]}          [description]
     */

  }, {
    key: "getCanvas",
    value: function getCanvas(canvasId, canvases) {
      var canvas = {};

      for (var i = 0, len = canvases.length; i < len; i++) {
        if (canvases[i].id === canvasId) {
          canvas = canvases[i];
          break;
        }
      }

      return canvas;
    }
    /**
     * Retrieve all canvases from a manifest
     * @function IIIFParser#getCanvases
     * @param options
     * @returns {Array} canvases - An array of canvases present in manifest
     */

  }, {
    key: "getCanvases",
    value: function getCanvases(manifest) {
      var canvases = [];
      var canvasesParent = manifest.items[0].items;
      canvases = canvasesParent.filter(function (possibleCanvas) {
        return possibleCanvas.type === 'Canvas';
      });
      return canvases;
    }
    /**
     * Parse canvasId URI for the canvas index
     * @function IIIFParser#getCanvasIndex
     * @param {string} canvasId - key in manifest
     * @returns {string} canvasIndex - URI canvas index
     */

  }, {
    key: "getCanvasIndex",
    value: function getCanvasIndex() {
      var canvasId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var canvasPos = canvasId.indexOf('canvas');
      var hashPos = canvasId.indexOf('#');
      var canvasIndex = '';

      if (canvasPos > -1 && hashPos > -1) {
        canvasIndex = canvasId.slice(canvasId.indexOf('/', canvasPos) + 1, canvasId.indexOf('#', canvasPos));
      } else if (canvasPos > -1 && hashPos === -1) {
        canvasIndex = canvasId.slice(canvasId.indexOf('/', canvasPos) + 1);
      }

      return canvasIndex;
    }
    /**
     * Get a canvas object from manifest 'canvases' array
     * @function IIIFParser#getCanvasByIndex
     * @param {string} index - target canvas index
     * @param {Object} manifest - Manifest object
     * @returns {Object} canvasObject - An individual canvas object
     */

  }, {
    key: "getCanvasByIndex",
    value: function getCanvasByIndex(index, manifest) {
      if (!index) {
        return {};
      }

      var manifestMap = this.buildManifestMap(manifest);
      var sequences = [];
      var canvases = [];
      var canvasObject = {};

      if (manifestMap.hasSequences) {
        sequences = manifest.sequences;
        sequences.forEach(function (sequence) {
          canvases = sequence.canvases;
          canvases.forEach(function (canvas) {
            var canvasIndex = canvas.id.slice(canvas.id.lastIndexOf('/') + 1);

            if (canvasIndex === index) {
              canvasObject = canvas;
            }
          });
        });
      }

      return canvasObject;
    }
  }, {
    key: "getCanvasMediaType",
    value: function getCanvasMediaType(canvas) {} // TODO: Make sure location of source files doesn't live elsewhere than where targeted below

    /**
     *  Get a target item at desired quality level
     *  @function IIIFParser#getContentItem
     *  @param {Object} contentObj - Canvas content object in manifest
     *  @param {string} qualityLevel - Quality level from manifest: ie. 'Medium', 'High'
     *  @return {Object} targetItem - An item object at desired quality level
     */

  }, {
    key: "getContentItem",
    value: function getContentItem(contentObj, qualityLevel) {
      var targetItem = {};
      contentObj.items.forEach(function (item) {
        item.body.forEach(function (body) {
          if (body.hasOwnProperty('items')) {
            body.items.forEach(function (item) {
              if (item.label.en[0] === qualityLevel) {
                targetItem = item;
              }
            });
          }
        });
      });
      return targetItem;
    }
    /**
     * Get a manifest's content array
     * @function IIIFParser#getFirstContentObj
     * @param {Object} manifest - A json manifest
     * @returns {Object} firstContent[0] - The first element in content array
     */

  }, {
    key: "getFirstContentObj",
    value: function getFirstContentObj(canvases) {
      return canvases[0].items[0];
    }
    /**
     * Parse the label value from a manifest item
     * See https://iiif.io/api/presentation/3.0/#label
     * @param {Object} label
     */

  }, {
    key: "getLabelValue",
    value: function getLabelValue(label) {
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
     * @return {Object} - Representing the media fragment, or undefined
     */

  }, {
    key: "getMediaFragment",
    value: function getMediaFragment(uri) {
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
     * Determine quality choices present in the manifest
     * @function IIIFParser#getQualityChoices
     * @param {Object} contentObj - A contentObj object in the manifest
     * @return {Object[]} choices - An array of quality choices
     */

  }, {
    key: "getQualityChoices",
    value: function getQualityChoices(contentObj) {
      var choices = [];
      contentObj.items.forEach(function (item) {
        item.body.forEach(function (body) {
          if (body.hasOwnProperty('items')) {
            body.items.forEach(function (item) {
              choices.push(item);
            });
          }
        });
      });
      return choices;
    }
    /**
     * Determine a video's (no audio dimensions?) presentation dimensions
     * @function IIIFParser#getPlayerDimensions
     * @param {Object} manifest - Current manifest
     * @param {Object} contentObj - Element in content array
     * @param {Object} item - Element of manifest's body.items array
     * @returns {Object} dimensions - Dimensions key/value pair
     */

  }, {
    key: "getPlayerDimensions",
    value: function getPlayerDimensions(manifest, contentObj, item) {
      var dimensions = {
        height: 480,
        width: 640
      };
      var canvasIndex = this.getCanvasIndex(contentObj.id);
      var canvas = this.getCanvasByIndex(canvasIndex, manifest); // Dimensions are at manifest root level

      if (manifest && manifest.hasOwnProperty('width')) {
        dimensions.height = manifest.height;
        dimensions.width = manifest.width;
      } // Dimensions are at canvas level


      if (canvas && canvas.hasOwnProperty('width')) {
        dimensions.height = canvas.height;
        dimensions.width = canvas.width;
      } // Dimensions are at item level


      if (item && item.hasOwnProperty('width')) {
        dimensions.height = item.height;
        dimensions.width = item.width;
      }

      return dimensions;
    }
    /**
     * Retrieve range start/stop times from uri query param 't=...'
     * @param  {[type]} uri [description]
     * @return {[type]}          [description]
     */

  }, {
    key: "getStartStopTimes",
    value: function getStartStopTimes(uri) {
      var hashParams = uri.split('#')[1];
      var tIndex = hashParams.indexOf('t=');
      var timesStr = hashParams.slice(tIndex + 2, hashParams.indexOf('&', tIndex));
      return timesStr.split(',');
    }
    /**
     * Determines whether manifest content object has subtitles included
     * @function IIIFParser#getSubtitles
     * @param {Object} contentObj - Manifest canvas content object
     * @return {Object} subtitlesObj - Object of subtitles in body array
     */

  }, {
    key: "getSubtitles",
    value: function getSubtitles(contentObj) {
      var subtitlesObj = {};
      contentObj.items.forEach(function (item) {
        item.body.forEach(function (body) {
          if (body.type === 'Text') {
            subtitlesObj = body;
          }
        });
      }); // Create any properties not present which the renderer depends upon

      subtitlesObj.id = subtitlesObj.id || '';
      subtitlesObj.language = subtitlesObj.language || '';
      return subtitlesObj;
    }
    /**
     * Get a thumbnail (poster) to display for a video file if one exists in the manifest
     * @param {Object Array} canvases Current canvases in manifest
     * @param  {string} canvasId The current canvas id
     * @return {string} URI of thumbnail or an empty string if not found
     */

  }, {
    key: "getCanvasPoster",
    value: function getCanvasPoster(canvases, canvasId) {
      var thumbnailUri = '';
      var canvas = canvases.find(function (canvas) {
        return canvas.id === canvasId;
      });

      if (canvas.thumbnail && canvas.thumbnail[0].id) {
        thumbnailUri = canvas.thumbnail[0].id;
      }

      return thumbnailUri;
    } // TODO: Clean up any above 'old' code and see if it's being used or not
    // NEW

  }, {
    key: "getChildCanvases",
    value: function getChildCanvases(item) {
      if (!item.items) {
        return [];
      }

      var canvases = item.items.filter(function (item) {
        return item.type === 'Canvas';
      });
      return canvases;
    }
    /**
     * Get contents of 'items[]' contained within the child 'body' property
     * Assuming these are choices of file type (ie. .mp4 / .webm)
     * // TODO: Should validate extra on 'body.type' === 'Choice'?
     * @param {Object} manifest IIIF Manifest
     * @returns {Array.<Object>} array of file choice objects
     */

  }, {
    key: "getChoiceItems",
    value: function getChoiceItems(manifest) {
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
  }, {
    key: "filterVisibleRangeItem",
    value: function filterVisibleRangeItem(item) {
      // if (!item.behavior) {
      //   return item;
      // }
      if (item.behavior === 'no-nav') {
        return null;
      }

      return item;
    }
  }]);
  return IIIFParser;
}();

exports["default"] = IIIFParser;