import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import api from './middleware/api'

export default (initialState, history) => {
  const enhancer = compose(applyMiddleware(routerMiddleware(history), api(history)))

  const store = createStore(rootReducer, initialState, enhancer)

  const persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return { store, persistor }
}
