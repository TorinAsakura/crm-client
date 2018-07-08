import React from 'react'
import { Switch, Route } from 'react-router'
import Auth from '../pages/auth/containers/Routes'
import App from './App'
import Users from '../pages/settings/users/containers/Routes'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/'>
      <App>
        <Route path='/settings/users' component={Users} />
      </App>
    </Route>
  </Switch>
)

export default Routes
