import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '../pages/auth/containers/Routes'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App />
    </Route>
  </Switch>
)

export default Routes
