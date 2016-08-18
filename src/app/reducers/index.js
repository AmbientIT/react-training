import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import todos from './todos';

export default combineReducers({
  todos,
  form,
});
