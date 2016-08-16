import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../constants/todoCrud';

export const addTodo = (todo) => {
  return {
    type: TODO_ADD,
    payload: Object.assign(todo, {
      id: Date.now(),
      isDone: false,
    }),
  };
};

export const removeTodo = (todo) => {
  return {
    type: TODO_REMOVE,
    payload: todo.get('id'),
  };
};

export const todoTogleIsDone = (todo) => {
  return {
    type: TODO_TOGGLE_ISDONE,
    payload: todo,
  };
};
