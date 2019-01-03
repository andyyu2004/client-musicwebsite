import { combineReducers } from 'redux';
import music from './music';
import albums from './albums';

const rootReducer = combineReducers({
  music,
  albums,
});

export default rootReducer;