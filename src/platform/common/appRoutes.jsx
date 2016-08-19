import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../browser/containers/Layout';
import Home from '../browser/containers/home/Home';
import TodoContainer from '../browser/containers/todo/TodoContainer';
import TodoListContainer from '../browser/containers/todo/list/ListContainer';
import TodoEditContainer from '../browser/containers/todo/edit/EditContainer';

/* eslint no-unused-vars:0 */
const createRoutes = (store) => {
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

export default createRoutes;
