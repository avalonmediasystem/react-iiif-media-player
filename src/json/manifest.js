export default {
  '@context': [
    'http://www.w3.org/ns/anno.jsonld',
    'http://iiif.io/api/presentation/3/context.json'
  ],
  type: 'Manifest',
  id: 'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest',
  label: {
    '@none': ['[Program, 2013-2014, no. 117]']
  },
  metadata: [
    {
      label: {
        '@none': ['Title']
      },
      value: {
        '@none': ['[Program, 2013-2014, no. 117]']
      }
    },
    {
      label: {
        '@none': ['Creator']
      },
      value: {
        '@none': ['Indiana University Philharmonic Orchestra.']
      }
    },
    {
      label: {
        '@none': ['Date Issued']
      },
      value: {
        '@none': ['2013']
      }
    },
    {
      label: {
        '@none': ['Note']
      },
      value: null
    },
    {
      label: {
        '@none': ['Contributor']
      },
      value: {
        '@none': [
          'Indiana University Philharmonic Orchestra.',
          'Watts, Andre.',
          'Effron, David.'
        ]
      }
    },
    {
      label: {
        '@none': ['Publisher']
      },
      value: {
        '@none': ['William and Gayle Cook Music Library']
      }
    },
    {
      label: {
        '@none': ['Subject']
      },
      value: {
        '@none': ['Overtures', 'Concertos (Piano)', 'Symphonies']
      }
    },
    {
      label: {
        '@none': ['Topical Subject']
      },
      value: {
        '@none': ['Overtures', 'Concertos (Piano)', 'Symphonies']
      }
    }
  ],
  rendering: [],
  homepage: {
    id: 'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n',
    type: 'Text',
    label: {
      '@none': ['View in Repository']
    },
    format: 'text/html'
  },
  items: [
    {
      type: 'Canvas',
      id:
        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c',
      label: {
        '@none': ['CD 1']
      },
      items: [
        {
          type: 'AnnotationPage',
          id:
            'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c/annotation_page/502b9e70-41ca-498d-8a41-25e76c70b29b',
          items: [
            {
              type: 'Annotation',
              motivation: 'painting',
              target:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c',
              body: {
                type: 'Choice',
                choiceHint: 'user',
                items: [
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/w9505051c/auto.m3u8',
                    type: 'Sound',
                    duration: 3136.194,
                    label: {
                      '@none': ['auto']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          "<a href='http://example.org/policy'>Access Policy</a>",
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/w9505051c',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/w9505051c/high.m3u8',
                    type: 'Sound',
                    duration: 3136.194,
                    label: {
                      '@none': ['high']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          '<a href="http://example.org/policy">Access Policy</a>',
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/w9505051c',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/w9505051c/medium.m3u8',
                    type: 'Sound',
                    duration: 3136.194,
                    label: {
                      '@none': ['medium']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          '<a href="http://example.org/policy">Access Policy</a>',
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/w9505051c',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ],
      width: null,
      height: null,
      duration: 3136.194
    },
    {
      type: 'Canvas',
      id:
        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g',
      label: {
        '@none': ['CD 2']
      },
      items: [
        {
          type: 'AnnotationPage',
          id:
            'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g/annotation_page/3dd17157-d04a-4028-8ae6-bf30c3083c64',
          items: [
            {
              type: 'Annotation',
              motivation: 'painting',
              target:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g',
              body: {
                type: 'Choice',
                choiceHint: 'user',
                items: [
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/tb09j569g/auto.m3u8',
                    type: 'Sound',
                    duration: 3085.167,
                    label: {
                      '@none': ['auto']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          '<a href="http://example.org/policy">Access Policy</a>',
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/tb09j569g',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/tb09j569g/high.m3u8',
                    type: 'Sound',
                    duration: 3085.167,
                    label: {
                      '@none': ['high']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          '<a href="http://example.org/policy">Access Policy</a>',
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/tb09j569g',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id:
                      'https://mallorn.dlib.indiana.edu/master_files/tb09j569g/medium.m3u8',
                    type: 'Sound',
                    duration: 3085.167,
                    label: {
                      '@none': ['medium']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://mallorn.dlib.indiana.edu/users/sign_in?login_popup=1',
                        '@type': 'AuthCookieService1',
                        confirmLabel: 'Login',
                        description:
                          'Avalon Application requires that you log in with your account to view this content.',
                        failureDescription:
                          '<a href="http://example.org/policy">Access Policy</a>',
                        failureHeader: 'Authentication Failed',
                        header: 'Please Log In',
                        label: 'Login Required',
                        profile: 'http://iiif.io/api/auth/1/login',
                        service: [
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/iiif_auth_token/tb09j569g',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://mallorn.dlib.indiana.edu/users/sign_out',
                            '@type': 'AuthLogoutService1',
                            label: 'Log out',
                            profile: 'http://iiif.io/api/auth/1/logout'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ],
      width: null,
      height: null,
      duration: 3085.167
    }
  ],
  structures: [
    {
      type: 'Range',
      id:
        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r91670a7d-4ce1-47c6-954c-d84726947a80',
      label: null,
      behavior: 'top',
      items: [
        {
          type: 'Range',
          id:
            'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r90445288-16de-4777-8d62-0691a827bc55',
          label: {
            '@none': ['CD 1']
          },
          items: [
            {
              type: 'Range',
              id:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/rf3e175b3-481d-44ab-95f8-b78a67a77e2c',
              label: {
                '@none': ['Track 1. [ambience]']
              },
              items: [
                {
                  type: 'Canvas',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c#t=0.0,314.0'
                }
              ]
            },
            {
              type: 'Range',
              id:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r12c01182-def1-4f63-b0c9-93c5a4217117',
              label: {
                '@none': [
                  'Track 2. Otto Nicolai, Die lustigen Weiber (The Merry Wives of Windsor): Overture'
                ]
              },
              items: [
                {
                  type: 'Canvas',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c#t=314.0,1166.0'
                }
              ]
            },
            {
              type: 'Range',
              id:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r8e785da7-1926-48ab-8b03-1c353cc630b3',
              label: {
                '@none': ['Edvard Grieg, Piano Concerto in A Minor, Op. 16']
              },
              items: [
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/rda0d4ec1-4d08-4447-9e81-faab91af17aa',
                  label: {
                    '@none': ['Track 3. I. Allegro molto moderato']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c#t=1166.0,1963.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r6bf0b1f2-1b52-46a4-89c9-6d82d13a5c58',
                  label: {
                    '@none': ['Track 4. II. Adagio']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c#t=1963.0,2347.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r61502a92-3dc2-4c64-94c1-4733a9dd8b39',
                  label: {
                    '@none': ['Track 5. III. Allegro moderato molto e marcato']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/w9505051c#t=2347.0,3136.0'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'Range',
          id:
            'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/rd70d42b2-ae1c-40b7-9a2b-eb6690ab869d',
          label: {
            '@none': ['CD 2']
          },
          items: [
            {
              type: 'Range',
              id:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r48fadb6c-111e-4824-bef8-719200f63857',
              label: {
                '@none': ['Track 1. [ambience]']
              },
              items: [
                {
                  type: 'Canvas',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g#t=0.0,341.0'
                }
              ]
            },
            {
              type: 'Range',
              id:
                'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/reaa9be51-5d9f-44ed-a937-cc8c36d39232',
              label: {
                '@none': ['Johannes Brahms, Symphony No. 2 in D Major, Op. 73']
              },
              items: [
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/rd879af0e-9ffb-42cf-9d34-d21ab24ae795',
                  label: {
                    '@none': ['Track 2. I. Allegro non troppo']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g#t=341.0,1374.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r68c0993a-c96a-4716-8fec-23508c480f85',
                  label: {
                    '@none': ['Track 3. II. Adagio non troppo']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g#t=1374.0,1992.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/r3803cf6c-30db-4742-8fbb-239e6c132e7c',
                  label: {
                    '@none': [
                      'Track 4. III. Allegretto grazioso (quasi andantino)'
                    ]
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g#t=1992.0,2329.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/range/rcdcea870-7cb6-45cb-bd17-48b2a0d2b3a9',
                  label: {
                    '@none': ['Track 5. IV. Allegro con spirito']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://mallorn.dlib.indiana.edu/media_objects/pg15bd93n/manifest/canvas/tb09j569g#t=2329.0,3085.0'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  thumbnail: [
    {
      id:
        '/assets/audio_icon-18c12b34090f5a2a5e706d173e5eeecbc55f78ed30a9b4dfcf6d54b9a927830b.png',
      type: 'Image'
    }
  ]
};
