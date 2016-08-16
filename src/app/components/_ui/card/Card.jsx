import React, { PropTypes } from 'react';

import { CardImage } from './cardImage/CardImage';

export const Card = ({ image, children }) => {
  return (
    <div className="flex mb2 border flex-center">
      <CardImage src={image} size={64} />

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
