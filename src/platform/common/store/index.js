import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const isDev = process.env.NODE_ENV === 'development' && process.env.BROWSER;

function getMiddleware(history) {
  const middleware = [thunk];
  if (process.env.BROWSER) {
    middleware.push(routerMiddleware(history));
  }
  return isDev
    ? applyMiddleware(...[...middleware, createLogger()])
    : applyMiddleware(...middleware);
}

function getEnhancers() {
  const enhancers = [];

  return isDev && window.devToolsExtension
    ? [...enhancers, window.devToolsExtension()]
    : enhancers;
}

function enableHotLoader(store) {
  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
}

function configureStore(initialState = {}, history) {
  const store = compose(
    getMiddleware(history),
    ...getEnhancers()
  )(createStore)(rootReducer, initialState);

  enableHotLoader(store);
  return store;
}

export default configureStore;
