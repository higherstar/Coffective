import createReducer from '../createReducer'
import { MessageBarManager } from 'react-native-message-bar'

// ------------------------------------
// Constants
// ------------------------------------
export const FORGOT_PASSWORD_REQUEST = 'ForgotPassword.REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'ForgotPassword.SUCCESS'
export const FORGOT_PASSWORD_FAILURE = 'ForgotPassword.FAILURE'

export const CLEAR = 'ForgotPassword.CLEAR'

// ------------------------------------
// Actions
// ------------------------------------
export const forgotPassword = (values) => (dispatch, getState, {fetch}) => {
  dispatch({type: FORGOT_PASSWORD_REQUEST})
  return fetch(`/wp/v2/users/forgot/email=${values.email}`, {
    method: 'GET',
    success: () => {
      dispatch({type: FORGOT_PASSWORD_SUCCESS})
      MessageBarManager.showAlert({
        message: `Check your email for next instructions.`,
        alertType: 'success',
      })
    },
    failure: (error) => {
      dispatch({type: FORGOT_PASSWORD_FAILURE})
      MessageBarManager.showAlert({
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
        alertType: 'error',
      })
    },
  })
}

export const clear = () => ({type: CLEAR})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
}

export default createReducer(initialState, {
  [FORGOT_PASSWORD_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [FORGOT_PASSWORD_SUCCESS]: (state, action) => ({
    loading: false,
  }),
  [FORGOT_PASSWORD_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
  }),
})
