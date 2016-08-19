import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from '../common/store';
import createRoutes from './appRoutes';

if (process.env.NODE_ENV === 'development') {
  require('./styles/bass.css');
  require('./styles/main.css');
}
const store = configureStore(window.REDUX_STATE, browserHistory);
const routes = createRoutes(store);
const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
};

export default App;
