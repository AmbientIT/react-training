import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE, FETCH_TODOS } from '../constants/todoCrud';
import httpApi from '../lib/httpApi';
import config from '../_config';

export const fetchTodo = params => dispatch => {
  return httpApi(`${config.API_URL}/todo`, {
    method: 'GET',
  }, params)
    .then(todos => {
      dispatch({
        type: FETCH_TODOS,
        payload: todos,
      });
    });
};

export const addTodo = todo => dispatch => {
  return httpApi(`${config.API_URL}/todo`, {
    method: 'POST',
    body: JSON.stringify(todo),
  })
    .then(createdTodo => {
      dispatch({
        type: TODO_ADD,
        payload: createdTodo,
      });
    });
};

export const removeTodo = todo => dispatch => {
  return httpApi(`${config.API_URL}/todo/${todo.id}`, {
    method: 'DELETE',
  })
    .then(() => {
      dispatch({
        type: TODO_REMOVE,
        payload: todo.id,
      });
    });
};

export const todoTogleIsDone = todo => dispatch => {
  todo.isDone = !todo.isDone;
  return httpApi(`${config.API_URL}/todo/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  })
    .then(() => {
      dispatch({
        type: TODO_TOGGLE_ISDONE,
        payload: todo.id,
      });
    });
};
