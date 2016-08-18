import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './containers/Layout';
import Home from './containers/home/Home';
import TodoContainer from './containers/todo/TodoContainer';
import TodoListContainer from './containers/todo/list/ListContainer';
import TodoEditContainer from './containers/todo/edit/EditContainer';

/* eslint no-unused-vars:0 */
export const createRoutes = (store) => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute	component={Home}	/>
      <Route path="/todo" component={TodoContainer}>
        <IndexRoute component={TodoListContainer} />
        <Route path="/edit/:id" component={TodoEditContainer} />
      </Route>
    </Route>
  );
};
