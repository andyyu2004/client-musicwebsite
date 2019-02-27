import { combineReducers } from 'redux';
import music from './music';
import album from './album';
import user from './user';
import message from './message';
import playback from './playback';
import artist from './artist';

const rootReducer = combineReducers({
  music,
  album,
  user,
  message,
  playback,
  artist,
});

export default rootReducer;