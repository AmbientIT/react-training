import React from 'react';
import config from './_config';
import Card from './components/card/Card';
import Button from './components/button/Button';

import './styles/main.css';
import './styles/bass.css';

export default () => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <div>Webpack is doing its thing with React and ES2015</div>
      <Card>
        <h3>Apprendre React</h3>
        <p>3 jours de formations</p>
        <p>
          <Button
            status="danger"
            type="button"
            onClick={() => console.log('remove')}
          >
            Remove
          </Button>
          <Button
            status="primary"
            type="button"
            onClick={() => console.log('done')}
          >
            Done
          </Button>
        </p>
      </Card>
    </section>
  );
};
