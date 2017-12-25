import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { reducer as form } from 'redux-form'
import configureStore from './CreateStore'
import ReduxPersist from '../Config/ReduxPersist'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  form,
  nav: require('./NavigationRedux').reducer,
  User: require('./UserRedux').default,
  Login: require('./LoginRedux').default,
  Registration: require('./RegistrationRedux').default,
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
