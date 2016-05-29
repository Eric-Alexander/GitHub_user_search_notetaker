'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="profile/:username" component={Profile} />
      <IndexRoute component={Home} />
    </Route>

  </Router>
);
