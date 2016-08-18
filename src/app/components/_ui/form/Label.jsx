import React, { PropTypes } from 'react';

export const Label = ({ key, children }) => {
  return (
    <label className="bold mb1" htmlFor={key}>
      { children }
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  key: PropTypes.string,
};
Label.defaultProps = {
  key: '',
};
