import React from 'react';
import { Link } from 'react-router';

import { Button } from '../_ui';
import config from '../../_config';

const style = {
  header: {
    paddingLeft: '10px',
    marginBottom: '40px',
  },
  nav: {
    display: 'inline-block',
    marginLeft: '10px',
  },
};

const Navbar = () => {
  return (
    <header style={style.header}>
      <span>
        {config.APP_TITLE}
      </span>
      <nav style={style.nav}>
        <Link to="">
          <Button>
            Home
          </Button>
        </Link>
        <Link to="todo" activeClassName="active-link">
          <Button>
            Todo
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
