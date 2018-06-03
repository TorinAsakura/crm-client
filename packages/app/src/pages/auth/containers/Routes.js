import React from 'react'
import { Route } from 'react-router'
import { BounceSwitch } from '@bloom/ui/src/animation/router'
import App from './App'
import Login from '../screens/login/containers/Login'
import Restore from '../screens/restore/containers/Restore'
import Reset from '../screens/reset/containers/Reset'

const Routes = () => (
  <App>
    <BounceSwitch>
      <Route path='/auth' exact component={Login} />
      <Route path='/auth/restore' exact component={Restore} />
      <Route path='/auth/reset/:token' exact component={Reset} />
    </BounceSwitch>
  </App>
)

export default Routes
