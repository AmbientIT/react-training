import React, { PropTypes } from 'react';

const TodoContainer = ({ children }) => {
  return (
    <section>
      <h1>Todo Area</h1>
      {children}
    </section>
  );
};

TodoContainer.propTypes = {
  children: PropTypes.node,
};

export default TodoContainer;
