/* eslint react/jsx-filename-extension:0 */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import createHistory from 'react-router/lib/createMemoryHistory';
import { AppContainer } from 'react-hot-loader';

import configureStore from '../../../common/store';
import { findAll, findOne, resetSelected } from '../../../common/actions/todoCrud';
import createRoutes from '../../../browser/appRoutes';


const renderReactApp = (req, res) => {
  const memoryHistory = createHistory(req.originalUrl);
  const store = configureStore({}, memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({ history, routes: createRoutes(store), location: req.originalUrl, basename: '/' }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', error);
      res.status(500);
    } else if (renderProps) {
      let promise = Promise.resolve();
      if (req.path === '/todo') {
        promise = findAll()(store.dispatch);
        resetSelected()(store.dispatch);
      } else if (req.path.indexOf('edit') !== -1) {
        promise = findOne(req.path.split('/')[2])(store.dispatch);
      }
      promise.then(() => {
        res.status(200);
        global.navigator = { userAgent: req.headers['user-agent'] };
        res.render('index', {
          title: 'My Todo list',
          reduxData: store.getState(),
          app: renderToString(
            <AppContainer>
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            </AppContainer>
          ),
        });
      });
    } else {
      res.status(404).send('Not found');
    }
  });
};


module.exports = server => {
  server.get('*', (req, res, next) => {
    return req.path.match(/^\/api/)
      || req.path.match(/^\/public/)
      || req.path.match(/^\/__what/) ? next() : renderReactApp(req, res);
  });
};
