/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyle } from './global_style';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
