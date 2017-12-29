import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { reducer as form } from 'redux-form'
import configureStore from '../createStore'
import ReduxPersist from '../config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  form,
  nav: require('./nav').default,
  carousel: require('./carousel').default,
  user: require('./user').default,
  login: require('./login').default,
  register: require('./register').default,
  forgotPassword: require('./forgotPassword').default,
  buildTeam: require('./buildTeam').default,
  faq: require('./faq').default,
  // global: require('./global').default,
})

export default (helpersConfig) => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let {store} = configureStore(finalReducers, helpersConfig)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
