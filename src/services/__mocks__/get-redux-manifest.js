import manifest from '../../json/test_data/mahler-symphony-video';
import { parseManifest } from 'manifesto.js';

export const getReduxManifest = () => parseManifest(manifest);
