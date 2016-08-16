import React, { Component } from 'react';

import { addTodo, removeTodo, todoTogleIsDone } from '../../actions/todoCrud';
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
    addTodo({
      title: this.state.title,
      description: this.state.description,
    });
  }

  render() {
    const { onInputChange, onFormSubmit } = this;
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
          removeItem={removeTodo}
          updateItem={todoTogleIsDone}
        />
      </div>
    );
  }
}

export default Todo;
