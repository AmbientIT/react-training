import React from 'react';
import	{	Router,	Route,	browserHistory,	IndexRoute	}	from	'react-router';
import App from './App';
import Home from './containers/home/Home';
import TodoContainer from './containers/todo/TodoContainer';
import TodoListContainer from './containers/todo/list/ListContainer';
import TodoEditContainer from './containers/todo/edit/EditContainer';

export const appRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute	component={Home}	/>
      <Route path="/todo" component={TodoContainer}>
        <IndexRoute component={TodoListContainer} />
        <Route path="/edit/:id" component={TodoEditContainer} />
      </Route>
    </Route>
  </Router>
);

export default () => appRoutes;
