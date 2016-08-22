import React, { Component } from 'react';

import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../../constants/todoCrud';
import { store } from '../../store';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';


class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: store.getState().todos.list,
    };
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        list: store.getState().todos.list,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  onFormSubmit = (todo) => {
    store.dispatch({
      type: TODO_ADD,
      payload: Object.assign({
        id: Date.now(),
        isDone: false,
      }, todo),
    });
  }

  onUpdateItem = (updatedTodo) => {
    store.dispatch({
      type: TODO_TOGGLE_ISDONE,
      payload: updatedTodo,
    });
  }

  onRemoveItem = (removedTodo) => {
    store.dispatch({
      type: TODO_REMOVE,
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
