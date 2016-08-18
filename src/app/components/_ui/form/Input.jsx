import React, { PropTypes } from 'react';

/* eslint no-unneeded-ternary: 0 */
export const Input = ({ id, type, reduxdata, placeholder }) => {
  return (
    <input
      id={id}
      className="block field mb2"
      style={{ minWidth: '100%' }}
      type={type}
      {...reduxdata}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  onChange: PropTypes.func,
  reduxdata: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  value: '',
  placeholder: '',
};
