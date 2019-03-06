import * as React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Layout from './layout/index';
import Home from './pages/home/index';
import Test from './pages/testComponent/BraftTest'

import ArticleIndex from './pages/article/index'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="index" />
      <Route path="index" component={Home} />
    </Route>
     <Route path="/edit" component={ArticleIndex}/>
     <Route path="/test" component={Test}/>
  </Router>
);
