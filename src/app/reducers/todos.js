import { Map, List } from 'immutable';
import {
  TODO_FINDALL,
  TODO_FINDONE,
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE,
  TODO_TOGGLE_ISDONE,
} from '../constants/todoCrud';

const initialState = {
  selectedTodo: Map({ title: '', description: '' }),
  list: List.of(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_FINDALL:
      state.list = List.of(...action.payload.map(todo => Map(todo)));
      break;
    case TODO_FINDONE:
      state.selectedTodo = Map(action.payload);
      break;
    case TODO_ADD:
      state.list = state.list.push(Map(action.payload));
      break;
    case TODO_REMOVE:
      state.list = state.list.filter(todo => todo.get('id') !== action.payload);
      break;
    case TODO_UPDATE:
    case TODO_TOGGLE_ISDONE:
      state.list = state.list.map(todo => todo.get('id') === action.payload.id ? Map(action.payload) : todo);
      break;
    default:
      return state;
  }
  return Object.assign({}, state);
};
