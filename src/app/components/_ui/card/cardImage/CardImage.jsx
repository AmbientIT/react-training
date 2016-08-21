import React, { PropTypes } from 'react';

const styles = {
  borderRadius: '50%',
};

const TodoImage = ({ src, size }) => {
  return (
    <img
      style={styles}
      src={src}
      width={size}
      height={size}
      className="flex-none m2"
      role="presentation"
    />
  );
};

TodoImage.propTypes = {
  /**
   * L'url de l'image
   */
  src: PropTypes.string,
  /**
   * La taille de l'image
   */
  size: PropTypes.number,
};
TodoImage.defaultProps = {
  src: './img/placeholder.svg',
  size: 96,
};

export default TodoImage;
