import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE, FETCH_TODOS } from '../constants/todoCrud';

const initialState = {
  selectedTodo: null,
  list: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_TODOS:
      state.list = action.payload;
      break;
    case TODO_ADD:
      state.list = [...state.list, payload];
      break;
    case TODO_REMOVE:
      state.list = state.list.filter(todo => todo.id !== payload);
      break;
    case TODO_TOGGLE_ISDONE:
      state.list = state.list.map(todo => {
        return todo.id === payload.id
          ? payload
          : todo;
      });
      break;
    default:
      return state;
  }
  return Object.assign({}, state);
};
