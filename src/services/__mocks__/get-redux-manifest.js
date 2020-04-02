import manifest from '../../json/test_data/mahler-symphony-video';
import manifesto from 'manifesto.js';

export const getReduxManifest = () => manifesto.create(manifest);
