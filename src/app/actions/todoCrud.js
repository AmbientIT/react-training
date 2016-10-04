import { reset } from 'redux-form';
import {
  TODO_FINDALL,
  TODO_FINDONE,
  TODO_ADD,
  TODO_REMOVE,
  TODO_UPDATE,
  TODO_TOGGLE_ISDONE,
} from '../constants/todoCrud';
import todoHttp from '../services/todoHttp';

export const findAll = params => dispatch => {
  return todoHttp.findAll({ params })
    .then(todos => dispatch({
      type: TODO_FINDALL,
      payload: todos,
    }));
};

export const findOne = (id, params = {}) => dispatch => {
  return todoHttp.findOne(id, { params })
    .then(todo => dispatch({
      type: TODO_FINDONE,
      payload: todo,
    }));
};

export const addTodo = todo => dispatch => {
  return todoHttp.create(todo)
    .then(createdTodo => dispatch({
      type: TODO_ADD,
      payload: Object.assign(createdTodo, {
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

export const updateTodo = todo => dispatch => {
  return todoHttp.update(todo)
    .then(updatedTodo => dispatch({
      type: TODO_UPDATE,
      payload: updatedTodo,
    }));
};

export const todoTogleIsDone = todo => dispatch => {
  todo.isDone = !todo.isDone;
  return todoHttp.update(todo)
    .then(updatedTodo => dispatch({
      type: TODO_TOGGLE_ISDONE,
      payload: updatedTodo,
    }));
};

export const resetSelected = () => dispatch => {
  dispatch(reset('todo'));
  return dispatch({
    type: TODO_FINDONE,
    payload: { title: '', description: '' },
  });
};
