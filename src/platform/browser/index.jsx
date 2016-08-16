import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../app/store';
import AppRouter from '../../app/appRoutes';

const store = configureStore();


const rootEl = window.document.getElementById('app-container');

render(
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../../app/appRoutes', () => {
    const NextRouter = require('../../app/appRoutes').default;

    render(
      <AppContainer>
        <Provider store={store}>
          <NextRouter />
        </Provider>
      </AppContainer>
      , rootEl
    );
  });
}
