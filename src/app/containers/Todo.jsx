import React, { Component } from 'react';
import configureStore from '../store';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../constant/todos';

import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

const store = configureStore({
  todos: {
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
        idDone: false,
      },
    ],
    selected: {},
  },
});

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().todos.list,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        list: store.getState().todos.list,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onFormSubmit = (createdTodo) => {
    console.log(createdTodo);
    store.dispatch({
      type: ADD_TODO,
      payload: createdTodo,
    });
  }

  onUpdateItem = (updatedTodo) => {
    updatedTodo.isDone = !updatedTodo.isDone;
    store.dispatch({
      type: UPDATE_TODO,
      payload: updatedTodo,
    });
  }

  onRemoveItem = (removedTodo) => {
    store.dispatch({
      type: REMOVE_TODO,
      payload: removedTodo.id,
    });
  }

  render() {
    const { onRemoveItem, onUpdateItem, onFormSubmit } = this;
    const { list } = this.state;

    return (
      <div>
        <TodoForm
          onSubmit={onFormSubmit}
        />
        <TodoList
          list={list}
          removeItem={onRemoveItem}
          updateItem={onUpdateItem}
        />
      </div>
    );
  }
}

export default Todo;
