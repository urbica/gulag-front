import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './globalStyles';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
