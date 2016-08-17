import React, { PropTypes } from 'react';
import Navbar from './components/navbar/Navbar';

import './styles/bass.css';
import './styles/main.css';

const App = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
