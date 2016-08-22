import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import * as todoActions from '../../actions/todoCrud';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';

const mapStateToProps = ({ todos }) => ({
  list: todos.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(todoActions, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class Todo extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    todoTogleIsDone: PropTypes.func,
    list: PropTypes.array,
  }

  onFormSubmit = (todo) => {
    this.props.addTodo(Object.assign({
      id: Date.now(),
      isDone: false,
    }, todo));
  }

  render() {
    const { onFormSubmit } = this;
    const { todoTogleIsDone, removeTodo, list } = this.props;

    return (
      <div>
        <TodoForm
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
