import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';
import 'reset-css';

import './globalStyle';
import store from './store';
import Routes from './Routes/Routes';

WebFont.load({
  google: {
    families: [
      'Playfair Display:400,400i,700,700i,900,900i',
      'Hind:300,400,500,600,700'
    ]
  }
});

ReactDOM.render(
  <Provider store={ store }>
    <Router basename="/">
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
