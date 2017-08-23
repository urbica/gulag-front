import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './globalStyles';
import store from './store';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
