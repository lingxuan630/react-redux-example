import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App.js';
import UserContainer from './containers/UserContainer.js';

//media
export default function AppRouter() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/user' component={UserContainer}></Route>
      </Route>
    </Router>
  );
}