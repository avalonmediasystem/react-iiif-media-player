import manifest from '../json/manifest-pawpaw-mahler';
import * as iiifParser from './iiif-parser';

jest.mock('./get-redux-manifest');

it('Determines whether canvases exist in the manifest', () => {
  expect(iiifParser.canvasesInManifest(manifest)).toBeTruthy();
  //manifest.items = [];
  //expect(iiifParser.canvasesInManifest(manifest)).not.toBeTruthy();
});

it('should contain a structures[] array which represents structured metadata', () => {
  expect(manifest.structures).toBeDefined();
  expect(Array.isArray(manifest.structures)).toBeTruthy();
});

it('should return an array of existing child "Canvas" items if they exist for a Range', () => {
  const rangeIdWithChildCanvases =
    'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-1';
  const rangeIdWithoutChildCanvases =
    'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1';

  expect(iiifParser.getChildCanvases(rangeIdWithChildCanvases)).toHaveLength(1);
  expect(iiifParser.getChildCanvases(rangeIdWithoutChildCanvases)).toHaveLength(
    0
  );
});

describe('getMediaFragment()', () => {
  it('returns a start/stop helper object from a uri', () => {
    const expectedObject = { start: '374', stop: '525' };
    expect(
      iiifParser.getMediaFragment(
        'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=374,525'
      )
    ).toEqual(expectedObject);

    const noTime = iiifParser.getMediaFragment(
      'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-4'
    );

    expect(noTime).toBeUndefined();
  });
});
