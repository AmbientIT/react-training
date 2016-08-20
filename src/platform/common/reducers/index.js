import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import todos from './todos';

const reducers = {
  todos,
  form,
};

if (process.env.BROWSER) {
  reducers.routing = routing;
}

export default combineReducers(reducers);
