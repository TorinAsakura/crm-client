import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '../pages/auth/containers/Routes'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
  </Switch>
)

export default Routes
