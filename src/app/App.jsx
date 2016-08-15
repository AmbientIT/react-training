import 'basscss/css/basscss.css';
import React from 'react';
import config from './_config';

export default () => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <div>Webpack is doing its thing with React and ES2015</div>
    </section>
  );
};
