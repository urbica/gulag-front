import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { IntlProvider } from 'react-intl-redux';
import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';

// reducers
import dataReducer from './components/App/reducers/dataReducer';
import uiReducer from './components/App/reducers/uiReducer';
import intlReducer from './components/App/reducers/intlReducer';

//
import Saga from './components/App/saga';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  intl: intlReducer,
  router: routerReducer
});

let middleware;
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routersMiddleware = routerMiddleware(history);
if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
  });
  middleware = applyMiddleware(
    sagaMiddleware,
    routersMiddleware,
    loggerMiddleware
  );
} else {
  middleware = applyMiddleware(sagaMiddleware, routersMiddleware);
}

const store = createStore(reducer, middleware);

sagaMiddleware.run(Saga);

addLocaleData([...enLocaleData, ...ruLocaleData]);
const intlSelector = state => state.get('intl').toJS();

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider intlSelector={intlSelector}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
