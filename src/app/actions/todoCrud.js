import { store } from '../store';
import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../constants/todoCrud';


export const addTodo = (todo) => {
  store.dispatch({
    type: TODO_ADD,
    payload: Object.assign(todo, {
      id: Date.now(),
      isDone: false,
    }),
  });
};

export const removeTodo = (todo) => {
  store.dispatch({
    type: TODO_REMOVE,
    payload: todo.get('id'),
  });
};

export const todoTogleIsDone = (todo) => {
  store.dispatch({
    type: TODO_TOGGLE_ISDONE,
    payload: todo,
  });
};
