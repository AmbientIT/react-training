import React from 'react';
import config from './_config';

import Todo from './containers/Todo';

import './styles/main.css';
import './styles/bass.css';

export default () => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <div>Webpack is doing its thing with React and ES2015</div>
      <Todo />
    </section>
  );
};
