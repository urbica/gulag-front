import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import store from '../../store';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider>
      {/* <Provider store={store}> */}
      <App />
    </Provider>, div
  );
});
