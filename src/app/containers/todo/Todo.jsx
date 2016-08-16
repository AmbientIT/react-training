import React, { Component } from 'react';

import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE_ISDONE } from '../../constants/todoCrud';
import { store } from '../../store';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';


class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
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

  onInputChange = (id, val) => {
    this.setState({
      [id]: val,
    });
  }

  onFormSubmit = () => {
    const { title, description } = this.state;
    store.dispatch({
      type: TODO_ADD,
      payload: {
        id: Date.now(),
        title,
        description,
        isDone: false,
      },
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
      payload: removedTodo.get('id'),
    });
  }

  render() {
    const { onRemoveItem, onUpdateItem, onInputChange, onFormSubmit } = this;
    const { title, description, list } = this.state;

    return (
      <div>
        <TodoForm
          titleValue={title}
          descriptionValue={description}
          onInputChange={onInputChange}
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
