import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout';
import IndexPage from './components/indexpage';
import FoodPage from './components/foodpage';
import NotFoundPage from './components/notfoundpage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="food/:id" component={FoodPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;