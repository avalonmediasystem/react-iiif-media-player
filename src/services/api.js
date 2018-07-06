import mockManifest from '../json/lunchroom-manners';
// Import the redux store, which is holding external configuration we might need
import { store } from '../Root';

export function fetchManifest(url) {
  const externalConfig = getExternalConfig();

  return fetch(url, externalConfig)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network request was not ok');
    })
    .then(json => json)
    .catch(err => {
      console.log('Problem with the fetch operation', err)
      return { error: 'Network failure fetching the manifest' };
    });
}

// Mock API call
export function fetchLocalManifest() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockManifest);
    }, 500);
  });
}


function getExternalConfig() {
  const currentState = store.getState();
  const { fetch } = currentState.externalConfig;
  let obj = {};

  if (fetch && fetch.options) {
    Object.assign(obj, fetch.options);
  }

  return obj;
}
