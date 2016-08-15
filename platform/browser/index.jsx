import React from 'react';
import { AppContainer } from 'react-hot-loader';

import { render } from 'react-dom';

import App from '../../src/app';

const rootEl = window.document.getElementById('app-container');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../../src/app', () => {
    const NextApp = require('../../src/app').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      , rootEl
    );
  });
}
