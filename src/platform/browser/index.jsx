import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import AppRouter from '../../app/appRoutes';

const rootEl = window.document.getElementById('app-container');

render(
  <AppContainer>
    <AppRouter />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../../app/appRoutes', () => {
    const NextRouter = require('../../app/appRoutes').default;

    render(
      <AppContainer>
        <NextRouter />
      </AppContainer>
      , rootEl
    );
  });
}
