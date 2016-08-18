import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateTodo, findOne, resetSelected } from '../../../actions/todoCrud';
import TodoForm from '../../../components/todoForm/TodoForm';

@connect(
  ({ todos: { selectedTodo } }) => ({ selectedTodo: selectedTodo.toObject() }),
  dispatch => bindActionCreators({ updateTodo, findOne, resetSelected }, dispatch)
)
export default class TodoEditContainer extends Component {
  static propTypes = {
    updateTodo: PropTypes.func,
    findOne: PropTypes.func,
    resetSelected: PropTypes.func,
    params: PropTypes.object,
    selectedTodo: PropTypes.object,
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    this.props.findOne(this.props.params.id);
    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.resetSelected();
  }

  onFormSubmit = data => {
    this.props.updateTodo(Object.assign(this.props.selectedTodo, data))
      .then(() => this.context.router.goBack());
  }

  render() {
    return (
      <div>
        <TodoForm
          onSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}
