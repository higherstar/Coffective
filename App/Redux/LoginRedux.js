// @flow

import createReducer from '../Services/ReduxEnhancer'
import { Alert } from 'react-native'
import { getUserSuccess } from './UserRedux'
import I18n from 'react-native-i18n'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'Login.REQUEST'
export const LOGIN_SUCCESS = 'Login.SUCCESS'
export const LOGIN_FAILURE = 'Login.FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const login = (authData: Object) => (dispatch: Function) => new Promise((resolve, reject) => {
  dispatch({
    type: LOGIN_REQUEST,
    authData,
    responseSuccess: loginSuccess,
    responseFailure: loginFailure,
    resolve,
    reject
  })
})

export const loginSuccess = (user: Object) => (dispatch: Function) => {
  dispatch(getUserSuccess(user))
  dispatch({ type: LOGIN_SUCCESS })
}

export const loginFailure = (errors: Object) => {
  // Backend returns Object of fields with error
  // so we get the first key in this object
  const fieldName = Object.keys(errors)[ 0 ]
  // TODO
  // Alert.alert(
  //   I18n.t('loginErrorTitle'),
  //   // Backend returns an array of errors as value to selected key
  //   // so we get the first item in this array
  //   `${I18n.t(fieldName)}: ${errors[ fieldName ][ 0 ]}`,
  //   [
  //     { text: I18n.t('ok') }
  //   ]
  // )
  return { type: LOGIN_FAILURE }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false
}

export default createReducer(INITIAL_STATE, {
  [LOGIN_REQUEST]: (state, action) => ({
    loading: true
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    loading: false
  }),
  [LOGIN_FAILURE]: (state, { error }) => ({
    loading: false
  })
})
