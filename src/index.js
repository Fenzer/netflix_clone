import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyle } from './global_style';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
