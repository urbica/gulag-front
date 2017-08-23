import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/data';

export default createStore(
  dataReducer,
  applyMiddleware(thunk)
);
