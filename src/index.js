import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
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
const history = createHistory();
const routersMiddleware = routerMiddleware(history);


if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({ collapsed: true });

  middleware = applyMiddleware(
    sagaMiddleware,
    routersMiddleware,
    loggerMiddleware
  );
} else {
  middleware = applyMiddleware(
    sagaMiddleware,
    routersMiddleware
  );
}

const reducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
});

const store = createStore(reducer, middleware);
sagaMiddleware.run(Saga);

// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
