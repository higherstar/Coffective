// @flow

import createReducer from '../Services/ReduxEnhancer'
import { Alert } from 'react-native'
import { getUserSuccess } from './UserRedux'
import I18n from 'react-native-i18n'

// ------------------------------------
// Constants
// ------------------------------------
export const REGISTER_REQUEST = 'Register.REQUEST'
export const REGISTER_SUCCESS = 'Register.SUCCESS'
export const REGISTER_FAILURE = 'Register.FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const register = (authData: Object) => (dispatch: Function) => new Promise((resolve, reject) => {
  dispatch({
    type: REGISTER_REQUEST,
    authData: {
      ...authData,
      source: 'mobile-app'
    },
    responseSuccess: registerSuccess,
    responseFailure: registerFailure,
    resolve,
    reject
  })
})

export const registerSuccess = (user: Object) => (dispatch: Function) => {
  // dispatch(getUserSuccess(user))
  dispatch({ type: REGISTER_SUCCESS })
}

export const registerFailure = (errors: Object) => {
  // Backend returns Object of fields with error
  // so we get the first key in this object
  const fieldName = Object.keys(errors)[ 0 ]
  // TODO
  // Alert.alert(
  //   I18n.t('registerErrorTitle'),
  //   // Backend returns an array of errors as value to selected key
  //   // so we get the first item in this array
  //   `${I18n.t(fieldName)}: ${errors[ fieldName ][ 0 ]}`,
  //   [
  //     { text: I18n.t('ok') }
  //   ]
  // )
  return { type: REGISTER_FAILURE }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false
}

export default createReducer(INITIAL_STATE, {
  [REGISTER_REQUEST]: (state, action) => ({
    loading: true
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    loading: false
  }),
  [REGISTER_FAILURE]: (state, { error }) => ({
    loading: false
  })
})
