// @flow

import createReducer from '../Services/ReduxEnhancer'
import { Alert } from 'react-native'
import I18n from 'react-native-i18n'

// ------------------------------------
// Constants
// ------------------------------------
export const RESET_PASSWORD_REQUEST = 'ResetPassword.REQUEST'
export const RESET_PASSWORD_SUCCESS = 'ResetPassword.SUCCESS'
export const RESET_PASSWORD_FAILURE = 'ResetPassword.FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const resetPassword = (data: Object) => (dispatch: Function) => new Promise((resolve, reject) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST,
    data,
    responseSuccess: resetPasswordSuccess,
    responseFailure: resetPasswordFailure,
    resolve,
    reject
  })
})

export const resetPasswordSuccess = () => {
  Alert.alert(
    null,
    I18n.t('resetPasswordSuccessDescription'),
    [
      { text: I18n.t('ok'),
        // onPress: NavigationActions.login
      }
    ]
  )
  return { type: RESET_PASSWORD_SUCCESS }
}

export const resetPasswordFailure = (errors: Object) => {
  // Backend returns Object of fields with error
  // so we get the first key in this object
  const fieldName = Object.keys(errors)[ 0 ]
  // TODO
  // Alert.alert(
  //   I18n.t('resetPasswordErrorTitle'),
  //   // Backend returns an array of errors as value to selected key
  //   // so we get the first item in this array
  //   `${I18n.t(fieldName)}: ${errors[ fieldName ][ 0 ]}`,
  //   [
  //     { text: I18n.t('ok') }
  //   ]
  // )
  return { type: RESET_PASSWORD_FAILURE }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false
}

export default createReducer(INITIAL_STATE, {
  [RESET_PASSWORD_REQUEST]: (state, action) => ({
    loading: true
  }),
  [RESET_PASSWORD_SUCCESS]: (state, action) => ({
    loading: false
  }),
  [RESET_PASSWORD_FAILURE]: (state, { error }) => ({
    loading: false
  })
})
