"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  '@context': ['http://www.w3.org/ns/anno.jsonld', 'http://iiif.io/api/presentation/3/context.json'],
  type: 'Manifest',
  id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest',
  label: {
    '@none': ['A Walkthrough of Avalon 6.4']
  },
  metadata: [{
    label: {
      '@none': ['Title']
    },
    value: {
      '@none': ['A Walkthrough of Avalon 6.4']
    }
  }, {
    label: {
      '@none': ['Date Issued']
    },
    value: {
      '@none': ['2018']
    }
  }],
  rendering: [],
  homepage: {
    id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s',
    type: 'Text',
    label: {
      '@none': ['View in Repository']
    },
    format: 'text/html'
  },
  items: [{
    type: 'Canvas',
    id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/canvas/bc386j278',
    items: [{
      type: 'AnnotationPage',
      id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/canvas/bc386j278/annotation_page/26c69423-beb7-43b1-aac5-451ad718e316',
      items: [{
        type: 'Annotation',
        motivation: 'painting',
        target: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/canvas/bc386j278',
        body: {
          type: 'Choice',
          choiceHint: 'user',
          items: [{
            id: 'https://pawpaw.dlib.indiana.edu/master_files/bc386j278/auto.m3u8',
            type: 'Video',
            height: 720,
            width: 1280,
            duration: 1562.1,
            label: {
              '@none': ['auto']
            },
            service: [{
              context: 'http://iiif.io/api/auth/1/context.json',
              '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
              '@type': 'AuthCookieService1',
              confirmLabel: 'Login',
              description: 'Avalon Application requires that you log in with your account to view this content.',
              failureDescription: "<a href='http://example.org/policy'>Access Policy</a>",
              failureHeader: 'Authentication Failed',
              header: 'Please Log In',
              label: 'Login Required',
              profile: 'http://iiif.io/api/auth/1/login',
              service: [{
                '@id': 'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bc386j278',
                '@type': 'AuthTokenService1',
                profile: 'http://iiif.io/api/auth/1/token'
              }, {
                '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_out',
                '@type': 'AuthLogoutService1',
                label: 'Log out',
                profile: 'http://iiif.io/api/auth/1/logout'
              }]
            }]
          }, {
            id: 'https://pawpaw.dlib.indiana.edu/master_files/bc386j278/high.m3u8',
            type: 'Video',
            height: 720,
            width: 1280,
            duration: 1562.1,
            label: {
              '@none': ['high']
            },
            service: [{
              context: 'http://iiif.io/api/auth/1/context.json',
              '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
              '@type': 'AuthCookieService1',
              confirmLabel: 'Login',
              description: 'Avalon Application requires that you log in with your account to view this content.',
              failureDescription: "<a href='http://example.org/policy'>Access Policy</a>",
              failureHeader: 'Authentication Failed',
              header: 'Please Log In',
              label: 'Login Required',
              profile: 'http://iiif.io/api/auth/1/login',
              service: [{
                '@id': 'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bc386j278',
                '@type': 'AuthTokenService1',
                profile: 'http://iiif.io/api/auth/1/token'
              }, {
                '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_out',
                '@type': 'AuthLogoutService1',
                label: 'Log out',
                profile: 'http://iiif.io/api/auth/1/logout'
              }]
            }]
          }, {
            id: 'https://pawpaw.dlib.indiana.edu/master_files/bc386j278/medium.m3u8',
            type: 'Video',
            height: 720,
            width: 1280,
            duration: 1562.1,
            label: {
              '@none': ['medium']
            },
            service: [{
              context: 'http://iiif.io/api/auth/1/context.json',
              '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
              '@type': 'AuthCookieService1',
              confirmLabel: 'Login',
              description: 'Avalon Application requires that you log in with your account to view this content.',
              failureDescription: "<a href='http://example.org/policy'>Access Policy</a>",
              failureHeader: 'Authentication Failed',
              header: 'Please Log In',
              label: 'Login Required',
              profile: 'http://iiif.io/api/auth/1/login',
              service: [{
                '@id': 'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bc386j278',
                '@type': 'AuthTokenService1',
                profile: 'http://iiif.io/api/auth/1/token'
              }, {
                '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_out',
                '@type': 'AuthLogoutService1',
                label: 'Log out',
                profile: 'http://iiif.io/api/auth/1/logout'
              }]
            }]
          }, {
            id: 'https://pawpaw.dlib.indiana.edu/master_files/bc386j278/low.m3u8',
            type: 'Video',
            height: 720,
            width: 1280,
            duration: 1562.1,
            label: {
              '@none': ['low']
            },
            service: [{
              context: 'http://iiif.io/api/auth/1/context.json',
              '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
              '@type': 'AuthCookieService1',
              confirmLabel: 'Login',
              description: 'Avalon Application requires that you log in with your account to view this content.',
              failureDescription: "<a href='http://example.org/policy'>Access Policy</a>",
              failureHeader: 'Authentication Failed',
              header: 'Please Log In',
              label: 'Login Required',
              profile: 'http://iiif.io/api/auth/1/login',
              service: [{
                '@id': 'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bc386j278',
                '@type': 'AuthTokenService1',
                profile: 'http://iiif.io/api/auth/1/token'
              }, {
                '@id': 'https://pawpaw.dlib.indiana.edu/users/sign_out',
                '@type': 'AuthLogoutService1',
                label: 'Log out',
                profile: 'http://iiif.io/api/auth/1/logout'
              }]
            }]
          }]
        }
      }]
    }],
    width: 1280,
    height: 720,
    duration: 1562.1
  }],
  structures: [{
    type: 'Range',
    id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/range/rfd98aa36-8d2a-40a4-b14e-e7d4cc6a8838',
    label: null,
    behavior: 'top',
    items: [{
      type: 'Range',
      id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/range/re8a4d7e7-f06a-44a2-871c-8e02371a8018',
      label: null,
      items: [{
        type: 'Canvas',
        id: 'https://pawpaw.dlib.indiana.edu/media_objects/vd66vz95s/manifest/canvas/bc386j278#t=0,'
      }]
    }]
  }],
  thumbnail: [{
    id: 'https://pawpaw.dlib.indiana.edu/master_files/bc386j278/thumbnail',
    type: 'Image'
  }]
};
exports["default"] = _default;