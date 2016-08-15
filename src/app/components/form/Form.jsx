import React, { PropTypes } from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form
      className="p2 mb2 border"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      { children }
    </form>
  );
};

Form.propTypes = {
  /**
   * La fonction appellée lors de la soumission du formulaire
   */
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
Form.defaultProps = {
  onSubmit: () => {},
};

export default Form;
