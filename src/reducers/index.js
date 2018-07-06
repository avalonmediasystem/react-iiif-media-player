import { combineReducers } from 'redux';
import getManifest from './get-manifest';
import nav from './nav';
import player from './player';
import externalConfig from './external-config';

export default combineReducers({
  externalConfig,
  getManifest,
  nav,
  player,
});
