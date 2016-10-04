import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from '../../../actions/todoCrud';
import TodoForm from '../../../components/todoForm/TodoForm';
import TodoList from '../../../components/todoList/TodoList';

@connect(
  ({ todos }) => ({ list: todos.list }),
  dispatch => bindActionCreators(todoActions, dispatch)
)
export default class TodoListContainer extends Component {
  static propTypes = {
    findAll: PropTypes.func,
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    resetSelected: PropTypes.func,
    todoTogleIsDone: PropTypes.func,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        isDone: PropTypes.bool,
      })
    ),
  }

  componentDidMount() {
    this.props.findAll();
  }

  onFormSubmit = data => {
    console.log(this);
    this.props.addTodo(Object.assign({ isDone: false }, data))
      .then(() => this.props.resetSelected());
  }

  render() {
    const { todoTogleIsDone, removeTodo, list } = this.props;

    return (
      <div>
        <TodoForm
          onSubmit={this.onFormSubmit}
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
