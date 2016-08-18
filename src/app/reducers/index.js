import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import todos from './todos';

export default combineReducers({
  todos,
  form,
  routing,
});
