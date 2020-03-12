import { store } from '../Root';

// Necessary so we can more easily mock in tests
export const getReduxManifest = () => {
  return store.getState().getManifest.parsedManifest;
};
