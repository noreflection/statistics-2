import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'mobx-react';
import * as stores from './stores';

import './index.css';
import App from './components/App';

ReactDOM.render(
  <Router>
    <Provider {...stores}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
