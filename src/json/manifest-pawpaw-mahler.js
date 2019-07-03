export default {
  '@context': [
    'http://www.w3.org/ns/anno.jsonld',
    'http://iiif.io/api/presentation/3/context.json'
  ],
  type: 'Manifest',
  id: 'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest',
  label: {
    '@none': ['Symphony no. 3']
  },
  summary: {
    '@none': [
      'Recorded Jan. 17-18, 1995, in the Musical Arts Center, Bloomington, Ind. Compact disc. Program notes and biographical notes by David Pickett, and text of the 4th and 5th movements in German with English translation ([16] p.) inserted in container.'
    ]
  },
  metadata: [
    {
      label: {
        '@none': ['Title']
      },
      value: {
        '@none': ['Symphony no. 3']
      }
    },
    {
      label: {
        '@none': ['Creator']
      },
      value: {
        '@none': ['Mahler, Gustav, 1860-1911.']
      }
    },
    {
      label: {
        '@none': ['Date Created']
      },
      value: {
        '@none': ['1995-01-17/1995-01-18']
      }
    },
    {
      label: {
        '@none': ['Date Issued']
      },
      value: {
        '@none': ['1996']
      }
    },
    {
      label: {
        '@none': ['Contributor']
      },
      value: {
        '@none': [
          'Ploeg, Lisa van der',
          'Joó Árpád 1948',
          'Indiana University Philharmonic Orchestra',
          "Indiana University Doctoral Conductors' Chorus",
          "Indiana University Children's Choir"
        ]
      }
    },
    {
      label: {
        '@none': ['Publisher']
      },
      value: {
        '@none': ['Indiana University School of Music']
      }
    },
    {
      label: {
        '@none': ['Subject']
      },
      value: {
        '@none': ['Symphonies']
      }
    },
    {
      label: {
        '@none': ['Topical Subject']
      },
      value: {
        '@none': ['Symphonies']
      }
    }
  ],
  rendering: [],
  homepage: {
    id: 'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w',
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
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n',
      label: {
        '@none': ['CD 1']
      },
      items: [
        {
          type: 'AnnotationPage',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n/annotation_page/530f8bcf-e1e8-443d-8f7e-b89a5b1c7c7b',
          items: [
            {
              type: 'Annotation',
              motivation: 'painting',
              target:
                'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n',
              body: {
                type: 'Choice',
                choiceHint: 'user',
                items: [
                  {
                    id:
                      'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/auto.m3u8',
                    type: 'Sound',
                    duration: 1985,
                    label: {
                      '@none': ['auto']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/ww72bb48n',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
                      'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/high.m3u8',
                    type: 'Sound',
                    duration: 1985,
                    label: {
                      '@none': ['high']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/ww72bb48n',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
                      'https://pawpaw.dlib.indiana.edu/master_files/ww72bb48n/medium.m3u8',
                    type: 'Sound',
                    duration: 1985,
                    label: {
                      '@none': ['medium']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/ww72bb48n',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
      duration: 1985
    },
    {
      type: 'Canvas',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046',
      label: {
        '@none': ['CD 2']
      },
      items: [
        {
          type: 'AnnotationPage',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046/annotation_page/a9b1cde3-c5a1-4e96-b857-4679984b9b16',
          items: [
            {
              type: 'Annotation',
              motivation: 'painting',
              target:
                'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046',
              body: {
                type: 'Choice',
                choiceHint: 'user',
                items: [
                  {
                    id:
                      'https://pawpaw.dlib.indiana.edu/master_files/bg257f046/auto.m3u8',
                    type: 'Sound',
                    duration: 3829.2,
                    label: {
                      '@none': ['auto']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bg257f046',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
                      'https://pawpaw.dlib.indiana.edu/master_files/bg257f046/high.m3u8',
                    type: 'Sound',
                    duration: 3829.2,
                    label: {
                      '@none': ['high']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bg257f046',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
                      'https://pawpaw.dlib.indiana.edu/master_files/bg257f046/medium.m3u8',
                    type: 'Sound',
                    duration: 3829.2,
                    label: {
                      '@none': ['medium']
                    },
                    service: [
                      {
                        context: 'http://iiif.io/api/auth/1/context.json',
                        '@id':
                          'https://pawpaw.dlib.indiana.edu/users/sign_in?login_popup=1',
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
                              'https://pawpaw.dlib.indiana.edu/iiif_auth_token/bg257f046',
                            '@type': 'AuthTokenService1',
                            profile: 'http://iiif.io/api/auth/1/token'
                          },
                          {
                            '@id':
                              'https://pawpaw.dlib.indiana.edu/users/sign_out',
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
      duration: 3829.2
    }
  ],
  structures: [
    {
      type: 'Range',
      id:
        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rb001ef98-954a-47c2-8690-28ab63ae867d',
      label: null,
      behavior: 'top',
      items: [
        {
          type: 'Range',
          id:
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r18328b5a-a801-433a-aa61-47042b4670af',
          label: {
            '@none': ['CD 1']
          },
          items: [
            {
              type: 'Range',
              id:
                'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r19e7c307-0047-4d27-a8f3-3a7d7cae8faf',
              label: {
                '@none': ['Mahler, Symphony No.3']
              },
              items: [
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r77825655-e324-46b1-b07b-83eee627d9bc',
                  label: {
                    '@none': ['Track 1. I. Kraftig']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=0.0,374.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/ra62f9a38-8a34-4aea-9c87-ab48de98d0a7',
                  label: {
                    '@none': ['Track 2. Langsam. Schwer']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=374.0,525.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/re3ad0b97-c7fe-4103-89f7-f53f2fb6ae3a',
                  label: {
                    '@none': ['Track 3. Tempo I']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=525.0,711.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r820f4aba-4134-4284-af6b-e3f2b46db48f',
                  label: {
                    '@none': ['Track 4. Schwungvoll']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=711.0,1188.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r9938bc16-a87c-4b41-9399-b52faeb85b10',
                  label: {
                    '@none': ['Track 5. Immer dasselbe Tempo']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=1188.0,1406.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rf6da9512-5e80-4283-9262-c6d58955384f',
                  label: {
                    '@none': ['Track 6. Wie zu Anfang']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=1406.0,1693.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rbc167609-a7a4-45fc-a1b8-784c5180c2f0',
                  label: {
                    '@none': ['Track 7. Tempo I']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/ww72bb48n#t=1693.0,1985.0'
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
            'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r4dd2121c-8779-4170-a01b-e032f6986c72',
          label: {
            '@none': ['CD 2']
          },
          items: [
            {
              type: 'Range',
              id:
                'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rc4e652a6-a56e-43fa-9509-9c4e25bb024f',
              label: {
                '@none': ['Mahler, Symphony No.3 (cont.)']
              },
              items: [
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r8fa7b5ba-32cf-40f6-8530-86cdf8cd6d94',
                  label: {
                    '@none': ['Track 1. II. Tempo di Menuetto']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=0.0,566.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rdc20fdbb-5188-49cf-8096-8ebdfbf134cd',
                  label: {
                    '@none': ['Track 2. III. Comodo']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=566.0,1183.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rdb1f5c54-57d1-4e62-8512-51da85ea47ee',
                  label: {
                    '@none': ['Track 3. Tempo I']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=1183.0,1635.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rd03a801c-8d59-4e67-866a-64f321701cda',
                  label: {
                    '@none': ['Track 4. IV. Misterioso']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=1635.0,2204.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r382085d6-3195-4028-91a4-a724048df988',
                  label: {
                    '@none': ['Track 5. V. Lustig im Tempo']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=2204.0,2475.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r982b2425-8bd7-4303-b722-3e8f8807c02f',
                  label: {
                    '@none': ['Track 6. VI. Langsam']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=2475.0,3047.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/rc5510b59-bd6f-4778-bb44-371ed40d9e2a',
                  label: {
                    '@none': ['Track 7. Nicht mehr so breit']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=3047.0,3287.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r954d6647-b82c-42ba-b7d9-c33f30307830',
                  label: {
                    '@none': ['Track 8. Tempo I']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=3287.0,3451.0'
                    }
                  ]
                },
                {
                  type: 'Range',
                  id:
                    'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/range/r0d6fd74a-517a-40aa-b763-3ac8b7853485',
                  label: {
                    '@none': ['Track 9. Tempo I']
                  },
                  items: [
                    {
                      type: 'Canvas',
                      id:
                        'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest/canvas/bg257f046#t=3451.0,3829.0'
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
