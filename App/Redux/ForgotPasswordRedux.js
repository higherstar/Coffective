// @flow

import createReducer from '../Services/ReduxEnhancer'
import { Alert } from 'react-native'
import I18n from 'react-native-i18n'

// ------------------------------------
// Constants
// ------------------------------------
export const FORGOT_PASSWORD_REQUEST = 'ForgotPassword.REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'ForgotPassword.SUCCESS'
export const FORGOT_PASSWORD_FAILURE = 'ForgotPassword.FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const forgotPassword = (data: Object) => (dispatch: Function) => new Promise((resolve, reject) => {
  dispatch({
    type: FORGOT_PASSWORD_REQUEST,
    data,
    responseSuccess: forgotPasswordSuccess,
    responseFailure: forgotPasswordFailure,
    resolve,
    reject
  })
})

export const forgotPasswordSuccess = () => {
  Alert.alert(
    null,
    I18n.t('forgotPasswordSuccessDescription'),
    [
      { text: I18n.t('ok'),
        // onPress: NavigationActions.login
      }
    ]
  )
  return { type: FORGOT_PASSWORD_SUCCESS }
}

export const forgotPasswordFailure = (errors: Object) => {
  // Backend returns Object of fields with error
  // so we get the first key in this object
  const fieldName = Object.keys(errors)[ 0 ]
  // TODO
  // Alert.alert(
  //   I18n.t('forgotPasswordErrorTitle'),
  //   // Backend returns an array of errors as value to selected key
  //   // so we get the first item in this array
  //   `${I18n.t(fieldName)}: ${errors[ fieldName ][ 0 ]}`,
  //   [
  //     { text: I18n.t('ok') }
  //   ]
  // )
  return { type: FORGOT_PASSWORD_FAILURE }
}

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false
}

export default createReducer(INITIAL_STATE, {
  [FORGOT_PASSWORD_REQUEST]: (state, action) => ({
    loading: true
  }),
  [FORGOT_PASSWORD_SUCCESS]: (state, action) => ({
    loading: false
  }),
  [FORGOT_PASSWORD_FAILURE]: (state, { error }) => ({
    loading: false
  })
})
