"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  '@context': 'http://iiif.io/api/presentation/3/context.json',
  id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/mahler-symphony-3.json',
  type: 'Manifest',
  label: {
    en: ['Symphony no. 3 - Mahler, Gustav, 1860-1911']
  },
  description: 'Published by the Indiana University School of Music. Recorded Jan. 17-18, 1995, in the Musical Arts Center, Bloomington, Ind. Compact disc',
  items: [{
    id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1',
    type: 'Canvas',
    duration: 1985,
    items: [{
      id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/1',
      type: 'AnnotationPage',
      items: [{
        id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/1/1',
        type: 'Annotation',
        motivation: 'painting',
        target: 'http://dlib.indiana.edu/iiif_av/canvas/1',
        body: [{
          type: 'Choice',
          choiceHint: 'user',
          items: [{
            id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/high/320Kbps.mp4',
            type: 'Audio',
            format: 'audio/mp4; codec..xxxxx',
            label: {
              en: ['High']
            }
          }, {
            id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD1/medium/128Kbps.mp4',
            type: 'Audio',
            format: 'audio/mp4; codec..xxxxx',
            label: {
              en: ['Medium']
            }
          }]
        }]
      }]
    }]
  }, {
    id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2',
    type: 'Canvas',
    duration: 3829,
    items: [{
      id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/2',
      type: 'AnnotationPage',
      items: [{
        id: 'https://dlib.indiana.edu/iiif_av/mahler-symphony-3/annopage/2/2',
        type: 'Annotation',
        motivation: 'painting',
        target: 'http://dlib.indiana.edu/iiif_av/canvas/2',
        body: [{
          type: 'Choice',
          choiceHint: 'user',
          items: [{
            id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD2/high/320Kbps.mp4',
            type: 'Audio',
            format: 'audio/mp4; codec..xxxxx',
            label: {
              en: ['High']
            }
          }, {
            id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/CD2/medium/128Kbps.mp4',
            type: 'Audio',
            format: 'audio/mp4; codec..xxxxx',
            label: {
              en: ['Medium']
            }
          }]
        }]
      }]
    }]
  }],
  structures: [{
    id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/0',
    type: 'Range',
    viewingHint: 'top',
    label: {
      en: ['Symphony no. 3 - Mahler, Gustav']
    },
    items: [{
      id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1',
      type: 'Range',
      label: {
        en: ['CD1 - Mahler, Symphony No.3']
      },
      items: [{
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-1',
        type: 'Range',
        label: {
          en: ['Track 1. I. Kraftig']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=0,374',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-2',
        type: 'Range',
        label: {
          en: ['Track 2. Langsam. Schwer']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=374,525',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-3',
        type: 'Range',
        label: {
          en: ['Track 3. Tempo I']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=525,711',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-4',
        type: 'Range',
        label: {
          en: ['Track 4. Schwungvoll']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=711,1188',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-5',
        type: 'Range',
        label: {
          en: ['Track 5. Immer dasselbe Tempo']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=1188,1406',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-6',
        type: 'Range',
        label: {
          en: ['Track 6. Wie zu Anfang']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=1406,1693',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/1-7',
        type: 'Range',
        label: {
          en: ['Track 7. Tempo I']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/1#t=01693,1985',
          type: 'Canvas'
        }]
      }]
    }, {
      id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2',
      type: 'Range',
      label: {
        en: ['CD2 - Mahler, Symphony No.3 (cont.)']
      },
      items: [{
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-1',
        type: 'Range',
        label: {
          en: ['Track 1. II. Tempo di Menuetto']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=0,566',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-2',
        type: 'Range',
        label: {
          en: ['Track 2. III. Comodo']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=566,1183',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-3',
        type: 'Range',
        label: {
          en: ['Track 3. Tempo I']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=1183,1635',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-4',
        type: 'Range',
        label: {
          en: ['Track 4. IV. Misterioso']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=1635,2204',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-5',
        type: 'Range',
        label: {
          en: ['Track 5. V. Lustig im Tempo']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=2204,2475',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-6',
        type: 'Range',
        label: {
          en: ['Track 6. VI. Langsam']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=2475,3047',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-7',
        type: 'Range',
        label: {
          en: ['Track 7. Nicht mehr so breit']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3047,3287',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-8',
        type: 'Range',
        label: {
          en: ['Track 8. Tempo I']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3287,3451',
          type: 'Canvas'
        }]
      }, {
        id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/range/2-9',
        type: 'Range',
        label: {
          en: ['Track 9. Tempo I']
        },
        items: [{
          id: 'http://dlib.indiana.edu/iiif_av/mahler-symphony-3/canvas/2#t=3451,3829',
          type: 'Canvas'
        }]
      }]
    }]
  }]
};
exports["default"] = _default;