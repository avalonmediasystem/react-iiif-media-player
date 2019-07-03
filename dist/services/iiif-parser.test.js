import manifest from '../json/lunchroom-manners';
import IIIFParser from './iiif-parser';

const iiifParser = new IIIFParser();

// TODO: Do we still need this?
it('should build a manifest map object', () => {
  const obj = iiifParser.buildManifestMap(manifest);

  expect(obj).toHaveProperty('hasCanvases');
  expect(obj).toHaveProperty('hasMultipleCanvases');
  expect(obj).toHaveProperty('hasSequences');
  expect(obj).toHaveProperty('isAudio');
  expect(obj).toHaveProperty('isVideo');
});

it('should contain a structures[] array which represents structured metadata', () => {
  expect(manifest.structures).toBeDefined();
  expect(Array.isArray(manifest.structures)).toBeTruthy();
});

// TODO: extend these tests to cover recursive calls
// TODO: createStructure is deprecated, clean this up by removing
it('should create a nestable HTML unordered list structure from a manifest', () => {
  const html = iiifParser.createStructure(manifest.structures, undefined, true);
  const htmlArray = html.split('<ul>');

  expect(htmlArray[1]).toEqual('<li>Getting Ready for Lunch');
  expect(htmlArray[2]).toEqual('<li>Washing Hands');
  expect(htmlArray[3]).toContain('<li><a');
});

it('should build a structure link from an item object', () => {
  const item = {
    "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/5",
    "type": "Range",
    "label": "Rinsing Well",
    "items": [
      {
        "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=165,178",
        "type": "Canvas"
      }
    ]
  };
  const expected = '<a href="http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=165,178">Rinsing Well</a>';

  expect(iiifParser.buildStructureLink(item)).toEqual(expected);
});

it('should return an array of existing child "Canvas" items if they exist', () => {
  const itemWithChild = {
    "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/5",
    "type": "Range",
    "label": "Rinsing Well",
    "items": [
      {
        "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=165,178",
        "type": "Canvas"
      }
    ]
  };
  const itemWithNoDirectChild = {
    "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2",
    "type": "Range",
    "label": "Washing Hands",
    "items": [
      {
        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/3",
        "type": "Range",
        "label": "Using Soap",
        "items": [
          {
            "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=157,160",
            "type": "Canvas"
          }
        ]
      },
      {
        "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/5",
        "type": "Range",
        "label": "Rinsing Well",
        "items": [
          {
            "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=165,178",
            "type": "Canvas"
          }
        ]
      }
    ]
  };

  expect(iiifParser.getChildCanvases(itemWithChild)).toHaveLength(1);
  expect(iiifParser.getChildCanvases(itemWithNoDirectChild)).toHaveLength(0);
})
