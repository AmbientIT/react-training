import React from 'react';
import config from './_config';

import Navbar from './components/navbar/Navbar';
import './styles/bass.css';
import './styles/main.css';

export default ({ children }) => {
  return (
    <section>
      <h1>{config.APP_TITLE}</h1>
      <Navbar />
      {children}
    </section>
  );
};
