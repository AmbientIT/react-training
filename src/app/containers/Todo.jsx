import React, { Component } from 'react';

import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    };
  }

  onFormSubmit = (createdTodo) => {
    console.log(createdTodo);
    const { list } = this.state;
    this.setState({
      list: [...list, Object.assign({
        id: list[list.length - 1].id + 1,
        isDone: false,
      }, createdTodo)],
    });
  }

  onUpdateItem = (updatedTodo) => {
    updatedTodo.isDone = !updatedTodo.isDone;
    this.setState({
      list: this.state.list.map(todo => {
        console.log(todo, updatedTodo);
        return todo.id === updatedTodo.id ? updatedTodo : todo;
      }),
    });
  }

  onRemoveItem = (removedTodo) => {
    this.setState({
      list: this.state.list.filter(todo => todo.id !== removedTodo.id),
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
