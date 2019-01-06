import { combineReducers } from 'redux';
import music from './music';
import albums from './albums';
import user from './user';

const rootReducer = combineReducers({
  music,
  albums,
  user,
});

export default rootReducer;