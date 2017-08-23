import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/data';
import uiReducer from './reducers/ui';

const reducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
});

export default createStore(
  reducer,
  applyMiddleware(thunk)
);
