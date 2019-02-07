import { combineReducers } from 'redux';
import music from './music';
import album from './album';
import user from './user';
import message from './message';

const rootReducer = combineReducers({
  music,
  album,
  user,
  message,
});

export default rootReducer;