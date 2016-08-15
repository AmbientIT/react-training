import React, { PropTypes } from 'react';

const Input = ({ id, type, onChange, value, placeholder }) => {
  console.log(id, type, onChange, value, placeholder);
  return (
    <input
      id={id}
      className="block field mb2"
      style={{ minWidth: '100%' }}
      type={type}
      onChange={(e) => {
        console.log('e.target.value :: ', e.target.value);
        console.log('current value :: ', value);
        onChange(e.target.value);
      }}
      value={value}
      placeholder={placeholder}
    />
  );
};

Input.defaultName = 'Input';
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  value: '',
  placeholder: '',
};

export default Input;
