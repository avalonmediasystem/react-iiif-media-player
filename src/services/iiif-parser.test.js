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
    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r77825655-e324-46b1-b07b-83eee627d9bc';
  const rangeIdWithoutChildCanvases =
    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r18328b5a-a801-433a-aa61-47042b4670af';

  expect(iiifParser.getChildCanvases(rangeIdWithChildCanvases)).toHaveLength(1);
  expect(iiifParser.getChildCanvases(rangeIdWithoutChildCanvases)).toHaveLength(
    0
  );
});

describe('getMediaFragment()', () => {
  it('returns a start/stop helper object from a uri', () => {
    const expectedObject = { start: '711.0', stop: '1188.0' };
    expect(
      iiifParser.getMediaFragment(
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=711.0,1188.0'
      )
    ).toEqual(expectedObject);

    const noTime = iiifParser.getMediaFragment(
      'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r820f4aba-4134-4284-af6b-e3f2b46db48f'
    );

    expect(noTime).toBeUndefined();
  });
});
