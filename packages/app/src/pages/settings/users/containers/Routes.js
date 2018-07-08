import React from 'react'
import { Route, Switch } from 'react-router'
import { Column, Layout } from 'flex-layouts'
import Users from './users/List'
import Roles from './roles/List'
import Role from './roles/Detail'
import PagePermissions from './common/PagePermissions'

const Routes = () => (
  <Switch>
    <Route exact path='/settings/users' component={Users} />
    <Route exact path='/settings/users/roles' component={Roles} />
    <Route path='/settings/users/roles/:id'>
      <Role>
        <Route exact path='/settings/users/roles/:id' component={PagePermissions} />
      </Role>
    </Route>
  </Switch>
)

export default Routes
