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

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less';
  }
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 40) {
    errors.description = 'Must be 15 characters or less';
  }
  return errors;
};

@reduxForm(
  {
    form: 'todo',
    fields: ['title', 'description'],
    validate,
  },
  state => ({ initialValues: state.todos.selectedTodo }),
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
        {title.touched && title.error && <div>{title.error}</div>}

        <Label key="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter description..."
          reduxdata={domOnlyProps(description)}
        />
        {description.touched && description.error && <div>{description.error}</div>}

        <Button status="success" type="submit" disabled={submitting}>Save</Button>
      </Form>
    );
  }
}
