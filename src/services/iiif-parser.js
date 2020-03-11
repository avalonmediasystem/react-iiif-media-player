import UtilityHelpers from './utility-helpers';
import manifesto from 'manifesto.js';
import { getReduxManifest } from './get-redux-manifest';

/**
 * Does the manifest have a canvases array?
 * @function IIIFParser#canvasesInManifest
 * @return {boolean} - Does manifest have a canvases array
 **/
export function canvasesInManifest(manifest) {
  const canvases = manifesto
    .create(manifest)
    .getSequences()[0]
    .getCanvases()
    .map(canvas => {
      let sources = canvas
        .getContent()[0]
        .getBody()
        .map(source => source.id);
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
export function filterVisibleRangeItem(item) {
  const behavior = manifesto
    .create(getReduxManifest())
    .getRangeById(item.id)
    .getViewingHint();

  if (behavior && behavior.value === 'no-nav') {
    return null;
  }
  return item;
}

export function getChildCanvases(rangeId) {
  let rangeCanvases = [];

  try {
    rangeCanvases = manifesto
      .create(getReduxManifest())
      .getRangeById(rangeId)
      .getCanvasIds();
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
export function getChoiceItems(manifest, canvasIndex) {
  let choiceItems = [];
  try {
    choiceItems = manifesto
      .create(manifest)
      .getSequences()[0]
      .getCanvases()
      [canvasIndex].getContent()[0]
      .getBody();
  } catch (e) {}

  return choiceItems;
}

/**
 * Parse the label value from a manifest item
 * See https://iiif.io/api/presentation/3.0/#label
 * @param {Object} label
 */
export function getLabelValue(label) {
  if (label && typeof label === 'object') {
    // English
    if (label.hasOwnProperty('en')) {
      return label['en'].length > 0 ? label['en'][0] : '';
    }
    // None
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
export function getMediaFragment(uri) {
  if (uri !== undefined) {
    const fragment = uri.split('#t=')[1];
    if (fragment !== undefined) {
      const splitFragment = fragment.split(',');
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

export function getCanvas(uri) {
  if (uri !== undefined) {
    return uri.split('#t=')[0];
  }
}

export function getSources(choiceItems) {
  const sources = choiceItems.map(item => {
    return {
      src: item.id,
      // TODO: make type more generic, possibly use mime-db
      format: item.getFormat().value
    };
  });
  return sources;
}

export function getMediaType(choiceItems) {
  let allTypes = choiceItems.map(item => item.getType().value);
  let uniqueTypes = allTypes.filter((t, index) => {
    return allTypes.indexOf(t) === index;
  });
  if (uniqueTypes.length === 1) {
    return uniqueTypes[0];
  }
  // Default type if there are different types
  return 'audio';
}

export function hasNextSection(index) {
  let canvasIDs = manifesto
    .create(getReduxManifest())
    .getSequences()[0]
    .getCanvases()
    .map(canvas => canvas.id);
  return canvasIDs.length - 1 > index ? true : false;
}
