import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from 'common/store';
import { createRoutes } from './appRoutes';

import './styles/bass.css';
import './styles/main.css';

const initialState = {};
const store = configureStore(initialState, browserHistory);
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
