import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App.js';

//media
export default function AppRouter() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>
  );
}
