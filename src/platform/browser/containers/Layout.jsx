import React, { PropTypes } from 'react';
import Navbar from 'browser/components/navbar/Navbar';

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
