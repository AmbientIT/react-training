import React, { PropTypes, Component } from 'react';
import { Map } from 'immutable';
import { reduxForm } from 'redux-form';

import { Input, Label, Form, Button } from '../_ui';

// ugly fix for redux-form and react will be fix soon see issues on their githu
/* eslint no-unused-vars:0 */
const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  ...domProps }) => domProps;

@reduxForm(
  {
    form: 'todo',
    fields: ['title', 'description'],
  },
  state => ({ initialValues: state.todos.selectedTodo.toObject() })
)
export default class TodoForm extends Component {
  static propTypes = {
    fields: PropTypes.object,
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func,
    values: PropTypes.object,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
  }

  render() {
    const { fields: { title, description }, handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Label key="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter title..."
          reduxdata={domOnlyProps(title)}
        />

        <Label key="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter description..."
          reduxdata={domOnlyProps(description)}
        />
        <Button status="success" type="submit" disabled={submitting}>Save</Button>
      </Form>
    );
  }
}
