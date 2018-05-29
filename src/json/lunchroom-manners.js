// https://mallorn.dlib.indiana.edu/lunchroom_manners.manifest.json
// https://gist.github.com/cjcolvar/f8094a9b6f3c707ae427ce6b931d2429

export default {
  "@context": [
    "http://www.w3.org/ns/anno.jsonld",
    "http://iiif.io/api/presentation/3/context.json"
  ],
  "type": "Manifest",
  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest",
  "label": "Lunchroom Manners",
  "metadata": [
    {
      "label": {
        "@none": [
          "Title"
        ]
      },
      "value": {
        "@none": [
          "Lunchroom Manners"
        ]
      }
    },
    {
      "label": {
        "@none": [
          "Creator"
        ]
      },
      "value": {
        "@none": [
          "IIIF Demo User"
        ]
      }
    },
    {
      "label": {
        "@none": [
          "Keyword"
        ]
      },
      "value": {
        "@none": [
          "IIIF",
          "lunchroom",
          "demo"
        ]
      }
    },
    {
      "label": {
        "@none": [
          "Rights statement"
        ]
      },
      "value": {
        "@none": [
          "http://rightsstatements.org/vocab/UND.0/"
        ]
      }
    }
  ],
  "items": [
    {
      "type": "Canvas",
      "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b",
      "label": "lunchroom_manners_1024kb.mp4",
      "thumbnail": [
        { "id": "http://fluorine.dlib.indiana.edu/downloads/08612n52b?file=thumbnail", "type": "Image" }
      ],
      "items": [
        {
          "type": "AnnotationPage",
          "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b/annotation_pagef783478-ae11-473f-9eaa-1f717a18756c",
          "items": [
            {
              "type": "Annotation",
              "motivation": "painting",
              "target": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b",
              "body": {
                "type": "Choice",
                "choiceHint": "user",
                "items": [
                  {
                    "id": "http://fluorine.dlib.indiana.edu/downloads/08612n52b?file=mp4",
                    "type": "Video",
                    "height": 360,
                    "width": 480,
                    "duration": 572.034
                  },
                  {
                    "id": "http://fluorine.dlib.indiana.edu/downloads/08612n52b?file=webm",
                    "type": "Video",
                    "height": 360,
                    "width": 480,
                    "duration": 572.034
                  }
                ]
              }
            }
          ]
        }
      ],
      "width": 480,
      "height": 360,
      "duration": 572.034
    }
  ],
  "structures": [
    {
      "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/1",
      "type": "Range",
      "label": "Getting Ready for Lunch",
      "items": [
        {
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
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/4",
              "type": "Range",
              "label": "",
              "behavior": "no-nav",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=160,165",
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
        }
      ]
    },
    {
      "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/6",
      "type": "Range",
      "label": "In the Lunchroom",
      "items": [
        {
          "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/7",
          "type": "Range",
          "label": "At the Counter",
          "items": [
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/8",
              "type": "Range",
              "label": "Getting Tray",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=227,245",
                  "type": "Canvas"
                }
              ]
            },
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/9",
              "type": "Range",
              "label": "Choosing Food",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=258,288",
                  "type": "Canvas"
                }
              ]
            },
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/10",
              "type": "Range",
              "label": "There will be Cake",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=301,308",
                  "type": "Canvas"
                }
              ]
            }
          ]
        },
        {
          "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/11",
          "type": "Range",
          "label": "At the Table",
          "items": [
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/12",
              "type": "Range",
              "label": "Sitting Quietly",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=323,333",
                  "type": "Canvas"
                }
              ]
            },
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/13",
              "type": "Range",
              "label": "Eating Neatly",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=362,378",
                  "type": "Canvas"
                }
              ]
            }
          ]
        },
        {
          "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/14",
          "type": "Range",
          "label": "Leavning the Lunchroom",
          "items": [
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/15",
              "type": "Range",
              "label": "Cleaning Up",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=448,492",
                  "type": "Canvas"
                }
              ]
            },
            {
              "id": "http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/16",
              "type": "Range",
              "label": "Putting Things Away",
              "items": [
                {
                  "id": "http://fluorine.dlib.indiana.edu/concern/generic_works/2n49t1699/manifest/canvas/08612n52b#t=511,527",
                  "type": "Canvas"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
