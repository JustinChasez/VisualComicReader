import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import configureStore from './configureStore';
import configFirebase from './configFirebase';

import App from './app/app';

firebase.initializeApp(configFirebase);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
