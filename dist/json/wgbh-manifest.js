"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "@context": ["http://www.w3.org/ns/anno.jsonld", "http://iiif.io/api/presentation/3/context.json"],
  "type": "Manifest",
  "id": "http://localhost:3000/concern/assets/cpb-aacip_600-zc7rn30h8g/manifest",
  "label": {
    "@none": ["asd"]
  },
  "metadata": null,
  "rendering": [],
  "items": [{
    "type": "Canvas",
    "id": "http://localhost:3000/concern/assets/cpb-aacip_600-zc7rn30h8g/manifest/canvas/cpb-aacip_600-zc7rn30h8g",
    "items": [{
      "type": "AnnotationPage",
      "id": "http://localhost:3000/concern/assets/cpb-aacip_600-zc7rn30h8g/manifest/canvas/cpb-aacip_600-zc7rn30h8g/annotation_page/1deede3b-70b0-4c9f-85e3-e76b31287cde",
      "items": [{
        "type": "Annotation",
        "motivation": "painting",
        "body": {
          "id": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          "type": "Video",
          "height": 250,
          "width": 400,
          "duration": 0.06,
          "label": {
            "@none": ["asdasd"]
          }
        },
        "target": "http://localhost:3000/concern/assets/cpb-aacip_600-zc7rn30h8g/manifest/canvas/cpb-aacip_600-zc7rn30h8g"
      }]
    }],
    "width": 400,
    "height": 250,
    "duration": 0.06
  }],
  "structures": [{
    "type": "Range",
    "id": "http://localhost:3000/concern/assets/cpb-aacip_600-zc7rn30h8g/manifest/range/rb5602905-913e-4e87-8068-7e0ca9b5bda0",
    "label": null,
    "behavior": "top",
    "items": []
  }]
};
exports["default"] = _default;