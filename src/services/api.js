import mockManifest from '../json/lunchroom-manners';

export function fetchManifest(url) {
  return fetch(url)
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
