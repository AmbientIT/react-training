import React, { PropTypes, Component } from 'react';

import { Input, Label, Form, Button } from '../_ui';

class TodoForm extends Component {
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

  render() {
    const {
      onSubmit,
    } = this.props;

    return (
      <Form onSubmit={() => onSubmit(this.state)}>
        <Label key="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter title..."
          value={this.state.title}
          onChange={val => this.onInputChange('title', val)}
        />

        <Label key="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter description..."
          value={this.state.description}
          onChange={(val) => this.onInputChange('description', val)}
        />
        <Button status="success" type="submit">Save</Button>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  titleValue: PropTypes.string,
  descriptionValue: PropTypes.string,
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  titleValue: '',
  descriptionValue: '',
  onInputChange: () => {},
  onSubmit: () => {},
};

export default TodoForm;
