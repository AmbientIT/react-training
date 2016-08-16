import React, { Component } from 'react';
import { Map, List } from 'immutable';

import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      list: List.of(
        Map({
          id: 0,
          title: 'Apprendre React',
          description: 'Formation de 3 jours',
          isDone: false,
        }),
        Map({
          id: 1,
          title: 'Ranger le bureau',
          description: 'ne pas oublier les tiroirs',
          idDone: false,
        }),
      ),
    };
  }

  onFormSubmit = () => {
    const { title, description, list } = this.state;
    this.setState({
      title: '',
      description: '',
      list: list.push(
        Map({
          id: Date.now(),
          title,
          description,
          isDone: false,
        })
      ),
    });
  }

  onInputChange = (id, val) => {
    this.setState({
      [id]: val,
    });
  }

  onUpdateItem = (updatedTodo) => {
    this.setState({
      list: this.state.list.map(todo => {
        return todo.get('id') === updatedTodo.get('id')
          ? updatedTodo.update('isDone', value => !value)
          : todo;
      }),
    });
  }

  onRemoveItem = (removedTodo) => {
    this.setState({
      list: this.state.list.filter(todo => todo.get('id') !== removedTodo.get('id')),
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
