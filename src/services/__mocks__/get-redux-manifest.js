import manifest from '../../json/mahler-symphony-audio';
import manifesto from 'manifesto.js';

export const getReduxManifest = () => manifesto.create(manifest);
