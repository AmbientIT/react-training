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
    list: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        isDone: PropTypes.bool,
      })
    ),
  }
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }

  onInputChange = (id, val) => {
    this.setState({
      [id]: val,
    });
  }

  onFormSubmit = () => {
    this.props.addTodo({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    const { onInputChange, onFormSubmit } = this;
    const { title, description } = this.state;
    const { todoTogleIsDone, removeTodo, list } = this.props;

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
