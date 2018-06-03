import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import 'flex-layouts/lib/flex-layouts.css'
import Root from './containers/Root'
import configureStore from './store'
import './index.css'

const history = createHistory()
const { store, persistor } = configureStore({}, history)

render(
  <Root store={store} history={history} persistor={persistor} />,
  document.getElementById('app'),
)
