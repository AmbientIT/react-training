import React from 'react';
import config from './_config';

import Todo from './containers/Todo';

import './styles/bass.css';
import './styles/main.css';

export default () => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <div>Webpack is doing its thing with React and ES2015</div>
      <Todo />
    </section>
  );
};
