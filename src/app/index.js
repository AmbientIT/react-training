import { render } from 'react-dom';
import React from 'react';
import { Form } from './components/form';

export const App = () => {
  return (
    <header>
      <div>Webpack is doing its thing with React and ES2015</div>
      <Form />
    </header>
  );
};

render(<App />, document.querySelector('.app-container'));
