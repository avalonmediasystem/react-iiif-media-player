import UtilityHelpers from './utility-helpers';
import manifesto from 'manifesto.js';
import { getReduxManifest } from './get-redux-manifest';

/**
 * Does the manifest have a canvases array?
 * @function IIIFParser#canvasesInManifest
 * @return {boolean} - Does manifest have a canvases array
 **/
export function canvasesInManifest(manifest) {
  return (
    manifesto
      .create(manifest)
      .getSequences()[0]
      .getCanvases().length > 0
  );
}

/**
 * Check if item's behavior is set to a value which should hide it
 * @param {Object} item
 */
export function filterVisibleRangeItem(item) {
  const behavior = manifesto
    .create(getReduxManifest())
    .getRangeById(item.id)
    .getBehavior();

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
 * // TODO: Should validate extra on 'body.type' === 'Choice'?
 * @param {Object} manifest IIIF Manifest
 * @returns {Array.<Object>} array of file choice objects
 */

// TODO: Not currently being used... skipping the manifestojs parsing
export function getChoiceItems(manifest) {
  const searchItems = items => {
    for (const item of items) {
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
  };
  let choiceItems = searchItems(manifest.items);

  return choiceItems || [];
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
