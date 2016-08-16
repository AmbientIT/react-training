import { Map, List } from 'immutable';
import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../constants/todoCrud';

const initialState = {
  selectedTodo: undefined,
  list: List.of(
    Map({
      id: 0,
      title: 'Apprendre React',
      description: 'Formation de 3 jours',
      isDone: false,
    }),
    Map({
      id: 1,
      title: 'Ranger le bureau',
      description: 'ne pas oublier les tiroirs',
      idDone: false,
    }),
  ),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      state.list = state.list.push(Map(action.payload));
      break;
    case TODO_REMOVE:
      state.list = state.list.filter(todo => todo.get('id') !== action.payload);
      break;
    case TODO_TOGGLE_ISDONE:
      console.log(state);
      state.list = state.list.map(todo => {
        return todo.get('id') === action.payload.get('id')
          ? action.payload.update('isDone', value => !value)
          : todo;
      });
      break;
    default:
      break;
  }
  return state;
};
