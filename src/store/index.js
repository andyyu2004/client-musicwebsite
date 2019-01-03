import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/';
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    sagaMiddleware, 
    )  
);

sagaMiddleware.run(rootSaga);
/*
Plan State Object
const store = {

}
*/

export default store;