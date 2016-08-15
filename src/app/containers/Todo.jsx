import React, { Component } from 'react';

import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
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

  onInputChange = (id, val) => {
    this.setState({
      [id]: val,
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

  onCreateItem = () => {
    const { list, title, description } = this.state;

    this.setState({
      title: '',
      description: '',
      list: [...list, {
        id: list[list.length - 1].id + 1,
        title,
        description,
      }],
    });
  }

  render() {
    const { onRemoveItem, onUpdateItem, onCreateItem, onInputChange } = this;
    const { list, title, description } = this.state;

    return (
      <div>
        <TodoForm
          onSubmit={onCreateItem}
          titleValue={title}
          descriptionValue={description}
          onInputChange={onInputChange}
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
