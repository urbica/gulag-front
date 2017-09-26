import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import './globalStyles';
import App from './components/App/App';
import Saga from './components/App/saga';
import registerServiceWorker from './registerServiceWorker';

// reducers
import dataReducer from './components/App/reducer';
import uiReducer from './reducers/ui';

let middleware;
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({ collapsed: true });

  middleware = applyMiddleware(sagaMiddleware, loggerMiddleware);
} else {
  middleware = applyMiddleware(sagaMiddleware);
}

const reducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
});

const store = createStore(reducer, middleware);
sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
