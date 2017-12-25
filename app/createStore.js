import { createStore, applyMiddleware, compose } from 'redux'
import Rehydration from './utils/Rehydration'
import ReduxPersist from './config/ReduxPersist'
import Config from './config/DebugConfig'
import thunk from 'redux-thunk'
import ScreenTracking from './reducers/ScreenTrackingMiddleware'
import createHelpers from './createHelpers'

// creates the store
export default (rootReducer, helpersConfig) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)
  /* ------------- Thunk Middleware ------------- */
  const helpers = createHelpers(helpersConfig)
  middleware.push(thunk.withExtraArgument(helpers))

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  return {
    store
  }
}
