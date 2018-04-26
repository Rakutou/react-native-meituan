import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import AllReducer from '../Reducers/RootReducer';

export default createStore(
  AllReducer,
  applyMiddleware(thunk, logger)
);


