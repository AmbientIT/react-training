import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const isDev = process.env.NODE_ENV === 'development';

function getMiddleware() {
  const middleware = isDev
    ? [createLogger()]
    : [];
  return applyMiddleware(...middleware);
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

function configureStore(initialState = {}) {
  const store = compose(
    getMiddleware(),
    ...getEnhancers()
  )(createStore)(rootReducer, initialState);

  enableHotLoader(store);
  return store;
}

export default configureStore;
