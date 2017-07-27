import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import { reducer as form } from 'redux-form'
import rootSaga from '../Sagas'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    form,
    nav: require('./NavigationRedux').reducer,
    User: require('./UserRedux').default,
    Login: require('./LoginRedux').default,
    Registration: require('./RegistrationRedux').default,
  })

  return configureStore(rootReducer, rootSaga)
}
