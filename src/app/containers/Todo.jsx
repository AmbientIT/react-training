import React, { Component } from 'react';

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
    const { onRemoveItem, onUpdateItem } = this;
    const { list } = this.state;

    return (
      <div>
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
