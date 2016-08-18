import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './App';

const rootEl = window.document.getElementById('app-container');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      , rootEl
    );
  });
}
