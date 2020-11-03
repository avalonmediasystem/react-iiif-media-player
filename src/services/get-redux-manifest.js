import { store } from '../components/IIIFPlayerWrapper/IIIFPlayerWrapper';

// Necessary so we can more easily mock in tests
export const getReduxManifest = () => {
  return store.getState().getManifest.parsedManifest;
};
