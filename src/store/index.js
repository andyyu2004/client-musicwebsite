import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/';
import { SYNC_STORE_WITH_SESSION } from '../actions/constants';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware, 
    createLogger({
      predicate: (getState, action) => action.type !== SYNC_STORE_WITH_SESSION
    })
  )  
);

sagaMiddleware.run(rootSaga);
/*
Plan State Object
const store = {

}
*/

export default store;