import createReducer from '../createReducer'

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
  return fetch(`/user/me/password-reset/`, {
    method: 'POST',
    body: values,
    success: (res) => dispatch({type: FORGOT_PASSWORD_SUCCESS, success: ''}),
    failure: (err) => dispatch({type: FORGOT_PASSWORD_FAILURE, error: ''}),
  })
}


export const clear = () => ({type: CLEAR})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  success: null,
  error: null,
}

export default createReducer(initialState, {
  [FORGOT_PASSWORD_REQUEST]: (state, action) => ({
    loading: true,
    error: null,
    success: null,
  }),
  [FORGOT_PASSWORD_SUCCESS]: (state, {success}) => ({
    loading: false,
    success,
  }),
  [FORGOT_PASSWORD_FAILURE]: (state, {error}) => ({
    loading: false,
    error,
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
    success: null,
    error: null,
  }),
})
