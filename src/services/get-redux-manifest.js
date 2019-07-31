import { store } from '../Root';

// Necessary so we can more easily mock in tests
export const getReduxManifest = () => store.getState().getManifest.manifest;
