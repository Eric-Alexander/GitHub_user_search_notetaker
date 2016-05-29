import React from 'react'
import ReactDOM from 'react-dom'
// var Router = rquire('react-router').Router;
// is the same thing as
import { Router } from 'react-router'
//you're importing a property from the object Router instead of the entire object 
import routes from './config/routes'


ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('bar')
)
