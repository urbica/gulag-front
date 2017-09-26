import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { IntlProvider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';

import './globalStyles';
import App from './components/App/App';
import Saga from './components/App/saga';
import registerServiceWorker from './registerServiceWorker';

// reducers
import dataReducer from './components/App/reducer';
import uiReducer from './reducers/ui';
import intlReducer from './reducers/intlReducer';

addLocaleData([...enLocaleData, ...ruLocaleData]);

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
  middleware = applyMiddleware(
    sagaMiddleware,
    routersMiddleware
  );
}

const reducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  intl: intlReducer,
  router: routerReducer
});

const store = createStore(reducer, middleware);
sagaMiddleware.run(Saga);

const intlSelector = state => state.get('intl').toJS();

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider intlSelector={intlSelector}>
      <App history={history} />
    </IntlProvider>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
