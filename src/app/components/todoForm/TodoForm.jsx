import React, { PropTypes } from 'react';

import { Input, Label, Form, Button } from '../_ui';

const TodoForm = (props) => {
  const {
    titleValue,
    descriptionValue,
    onSubmit,
    onInputChange,
  } = props;

  return (
    <Form onSubmit={onSubmit}>
      <Label key="title">Title</Label>
      <Input
        id="title"
        placeholder="Enter title..."
        value={titleValue}
        onChange={val => onInputChange('title', val)}
      />

      <Label key="description">Description</Label>
      <Input
        id="description"
        placeholder="Enter description..."
        value={descriptionValue}
        onChange={(val) => onInputChange('description', val)}
      />
      <Button status="success" type="submit">Save</Button>
    </Form>
  );
};

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
