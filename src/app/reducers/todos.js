import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../constants/todoCrud';

const initialState = {
  selectedTodo: undefined,
  list: [
    {
      id: 0,
      title: 'Apprendre React',
      description: 'Formation de 3 jours',
      isDone: false,
    },
    {
      id: 1,
      title: 'Ranger le bureau',
      description: 'ne pas oublier les tiroirs',
      isDone: false,
    },
  ],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case TODO_ADD:
      state.list = [...state.list, payload];
      break;
    case TODO_REMOVE:
      state.list = state.list.filter(todo => todo.id !== payload);
      break;
    case TODO_TOGGLE_ISDONE:
      state.list = state.list.map(todo => {
        return todo.id === payload.id
          ? Object.assign(payload, { isDone: !payload.isDone })
          : todo;
      });
      break;
    default:
      return state;
  }
  return Object.assign({}, state);
};
