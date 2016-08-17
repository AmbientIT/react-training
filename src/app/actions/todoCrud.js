import { TODO_FINDALL, TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../constants/todoCrud';
import todoHttp from '../services/todoHttp';

export const findAll = params => dispatch => {
  return todoHttp.findAll({ params })
    .then(todos => dispatch({
      type: TODO_FINDALL,
      payload: todos,
    }));
};

export const addTodo = todo => dispatch => {
  return todoHttp.create(todo)
    .then(createdTodo => dispatch({
      type: TODO_ADD,
      payload: Object.assign(createdTodo, {
        id: Date.now(),
        isDone: false,
      }),
    }));
};

export const removeTodo = todo => dispatch => {
  return todoHttp.destroy(todo.get('id'))
    .then(() => dispatch({
      type: TODO_REMOVE,
      payload: todo.get('id'),
    }));
};

export const todoTogleIsDone = todo => dispatch => {
  return todoHttp.update(todo.update('isDone', isDone => !isDone))
    .then(updatedTodo => dispatch({
      type: TODO_TOGGLE_ISDONE,
      payload: updatedTodo,
    }));
};
