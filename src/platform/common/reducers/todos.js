import {
  TODO_FINDALL,
  TODO_FINDONE,
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE,
  TODO_TOGGLE_ISDONE,
} from '../constants/todoCrud';

const initialState = {
  selectedTodo: { title: '', description: '' },
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_FINDALL:
      state.list = action.payload;
      state.selectedTodo = initialState.selectedTodo;
      break;
    case TODO_FINDONE:
      state.selectedTodo = action.payload;
      break;
    case TODO_ADD:
      state.list = [...state.list, action.payload];
      break;
    case TODO_REMOVE:
      state.list = state.list.filter(todo => todo.id !== action.payload);
      break;
    case TODO_UPDATE:
    case TODO_TOGGLE_ISDONE:
      state.list = state.list.map(todo => todo.id === action.payload.id ? action.payload : todo);
      break;
    default:
      return state;
  }
  return Object.assign({}, state);
};
