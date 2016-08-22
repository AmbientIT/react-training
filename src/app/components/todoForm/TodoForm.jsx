import React, { PropTypes, Component } from 'react';

import { Input, Label, Form, Button } from '../_ui';

class TodoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  static defaultProps = {
    onSubmit: () => {},
  };

  onInputChange = (id, val) => {
    this.setState({
      [id]: val,
    });
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <Form onSubmit={() => onSubmit(this.state)}>
        <Label key="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter title..."
          onChange={val => this.onInputChange('title', val)}
        />

        <Label key="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter description..."
          onChange={(val) => this.onInputChange('description', val)}
        />
        <Button status="success" type="submit">Save</Button>
      </Form>
    );
  }
}

export default TodoForm;
