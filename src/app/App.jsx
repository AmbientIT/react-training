import 'basscss/css/basscss.css';
import React from 'react';
import config from './_config';

const styles = {
  borderRadius: '50%',
};

export default () => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <div>Webpack is doing its thing with React and ES2015</div>
      <div className="flex mb2 border flex-center">
        <img
          style={styles}
          src="img/placeholder.svg"
          width="96"
          height="96"
          className="flex-none m2"
          role="presentation"
        />
        <div className="flex-auto p2 border">
          <h3>John snow</h3>
          <p>Lord commander</p>
          <p>
            <button
              type="button"
              className="btn btn-primary white"
            >
            Do something
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
