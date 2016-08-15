import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import App from '../../app/App';

const rootEl = window.document.getElementById('app-container');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../../app', () => {
    const NextApp = require('../../app/App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      , rootEl
    );
  });
}
