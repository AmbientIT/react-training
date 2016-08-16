import React from 'react';
import	{	Router,	Route,	browserHistory,	IndexRoute	}	from	'react-router';
import App from './App';
import Home from './containers/home/Home';
import Todo from './containers/todo/Todo';

export const appRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute	component={Home}	/>
      <Route path="/todo" component={Todo} />
    </Route>
  </Router>
);

export default () => appRoutes;
