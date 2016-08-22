import React, { PropTypes } from 'react';

import TodoImage from './cardImage/CardImage';

const Card = ({ image, children }) => {
  return (
    <div className="flex mb2 border flex-center">
      <TodoImage src={image} size={64} />

      <div className="flex-auto">
        { children }
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * L'enfant de ce component
   */
  children: PropTypes.node,
  /**
   * L'url a fournir au cmponent TodoImage
   */
  image: PropTypes.string,
};

export default Card;
