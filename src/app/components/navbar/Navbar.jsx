import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todo">TodoList</Link>
    </nav>
  );
};

export default Navbar;
