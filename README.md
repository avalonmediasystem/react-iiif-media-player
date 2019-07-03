# react-iiif-media-player

A ReactJS component which renders both a MediaelementJS player (http://www.mediaelementjs.com/) and structured navigation from a IIIF 3.0 spec manifest.

## General Usage:

Add the `react-iiif-media-player` component into your ReactJS application via `yarn` or `npm`.

`yarn add react-iiif-media-player`

### Example usage reading a local IIIF Manifest file:

```
import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';
/**
 * Import a local manifest here.
 * If included in the 'props' below, it will take precedence over the URI
 */
//import iiifManifest from '../../src/json/manifest-pawpaw-mahler';

// A valid, Cors ready, IIIF Manifest URI endpoint
// If this variable has a value, it will take precedence over 'iiifManifest' local manifest file imported above
const iiifManifestUrl =
  'https://pawpaw.dlib.indiana.edu/media_objects/2j62s484w/manifest.json';

const props = {
  config: {
    // If you'd like to include any fetch API configuration in the
    // network request for a IIIF Manifest URI, place here
    fetch: {
      options: {
        credentials: 'omit'
      }
    }
  },
  /* Local manifest goes here */
  //iiifManifest,
  iiifManifestUrl
};

render(<Root {...props} />, document.getElementById('root'));

```

`iiifManifestUrl` if present will be used over `iiifManifest`. `iiifManifestUrl` should be a uri for a public IIIF manifest 3.0 json file.

_Note:_ you may experience CORS or CORB errors if running this application locally in development mode when trying to hit an external manifest uri. Make sure your server is configured properly to allow for testing.

#### IIIF 3.0 spec

http://iiif.io/api/presentation/3.0/

## Developing

### Run the application locally

First clone the repository:

`git clone git@github.com:avalonmediasystem/react-iiif-media-player.git`

Install dependencies:

`yarn install`

Run the demo application:

`yarn start`

View the application in a web browser. Visit:

http://localhost:3001/

### Development process

Work on all files located in `/src`, and in development mode you can test your work in the demo application (`/demo/src`). This is what is displayed at http://localhost:3001/.

## Building the package

When you're ready to build the package, run:

`yarn run transpile`

This will create NPM/Yarn package files which can be pushed to the NPM registry.

## Tests

`yarn test`

### Commands

The following commands are available to the application via `npm scripts` located in the `package.json` file.

```
yarn clean
```

Cleans the output directory `dist`, ensuring a fresh copy of files when preparing your files for packaging.

```
yarn start
```

Starts the webpack development server in which you can view your work. http://localhost:3001/

```
yarn test
```

Runs the application's tests once, and provides a coverage report.

```
yarn test:watch
```

If you prefer to keep an open `watch` on your tests during development, run this command in a separate tab in your terminal/shell.

```
yarn transpile
```

This command prepares the SME React component for packaging and distribution. It moves packaged, transpiled files into the `/dist` directory. Run this command when you're happy with your development changes, before committing a branch which you wish to push to Github or import locally.

## Running the tests

To run the tests, with a full coverage report:

```
yarn test
```

To run tests in `watch` mode:

```
yarn test:watch
```

`Jest` is our testing framework, and we're in the process of incorporating `react-testing-library` https://github.com/testing-library/react-testing-library.

### Coding style tests

There is a `prettierrc` file with project coding style settings.

## Deployment

To create a new build package which can be imported by a consuming application, run:

```
yarn transpile
```

This will create a component package in the `/dist` folder which is ready to be imported by another application.

Currently we're installing the component through a GitHub repo instead of the NPM repository, so to import the default package into your application, run:

```
yarn add https://github.com/avalonmediasystem/react-iiif-media-player
```

If you'd like to import a feature branch you're working on, maybe called `my-new-feature`, do the following:

```
yarn remove react-iiif-media-player
```

(to make sure old files aren't hanging around)

Then,

```
yarn add https://github.com/avalonmediasystem/react-iiif-media-player#my-new-feature
```

See the yarn docs (https://yarnpkg.com/lang/en/docs/cli/add/) for more info on alternative ways of importing packages.

## Built With

- [React](https://reactjs.org/) - JavaScript component library
- [Jest](https://jestjs.io/) - Testing framework

## Contributing

Please read [CONTRIBUTING.md](contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/avalonmediasystem/react-structural-metadata-editor/tags).

## Authors

- **Adam J. Arling** - _Front End Developer_ - [Northwestern University](https://northwestern.edu)

See also the list of [contributors](https://github.com/avalonmediasystem/react-structural-metadata-editor/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Avalon Media System](https://www.avalonmediasystem.org/)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
