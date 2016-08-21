import React, { PropTypes } from 'react';

const buttonStatus = {
  success: 'bg-green',
  warning: 'bg-orange',
  primary: 'bg-blue',
  danger: 'bg-red',
};

export const Button = ({ type, onClick, status, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-primary white ${buttonStatus[status]}`}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  /**
   * Le contenu du button (du texte ou du html)
   */
  children: PropTypes.node,
  /**
   * Le type du boutton
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Le status du boutton (voir basscss)
   */
  status: PropTypes.oneOf(['success', 'warning', 'primary', 'danger']),
  /**
   * La fonction appelée au clic
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  status: 'primary',
};
