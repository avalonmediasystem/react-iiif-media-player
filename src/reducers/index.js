import { combineReducers } from 'redux';
import getManifest from './get-manifest';
import nav from './nav';
import player from './player';

export default combineReducers({
  getManifest,
  nav,
  player
});
