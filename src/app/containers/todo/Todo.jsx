import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActions from '../../actions/todoCrud';
import TodoForm from '../../components/todoForm/TodoForm';
import TodoList from '../../components/todoList/TodoList';

const mapStateToProps = ({ todos }) => ({
  list: todos.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(todoActions, dispatch);

class TodoListContainer extends React.Component {
  componentWillMount() {
    this.props.fetchTodo();
  }

  render() {
    const { todoTogleIsDone, removeTodo, addTodo, list } = this.props;
    return (
      <div>
        <TodoForm
          onSubmit={addTodo}
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

TodoListContainer.propTypes = {
  fetchTodo: PropTypes.func,
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todoTogleIsDone: PropTypes.func,
  list: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
