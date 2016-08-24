import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../constant/todos';

const initialState = {
  list: [],
  selected: {},
};

const todos = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ADD_TODO:
      state.list = [...state.list, action.payload];
      break;
    case REMOVE_TODO:
      state.list = state.list.filter(todo => todo.id !== action.payload);
      break;
    case UPDATE_TODO:
      state.list = state.list.map(todo => {
        return todo.id === action.payload.id
          ? Object.assign({}, action.payload)
          : todo;
      });
      break;
    default:
      return state;
  }

  return Object.assign({}, state);
};

export default todos;
