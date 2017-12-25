// @flow

import createReducer from '../Services/ReduxEnhancer'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'Login.REQUEST'
export const LOGIN_SUCCESS = 'Login.SUCCESS'
export const LOGIN_FAILURE = 'Login.FAILURE'

export const CHANGE_EMAIL = 'Login.CHANGE_EMAIL'
export const CHANGE_PASSWORD = 'Login.CHANGE_PASSWORD'
export const VALIDATE = 'Login.VALIDATE'
export const VALIDATE_EMAIL = 'Login.VALIDATE_EMAIL'

export const CLEAR = 'Login.CLEAR'

const required = value => value ? undefined : 'Required'
const validEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined

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

export const getData = () => (dispatch, getState, {fetch}) => {
  return fetch(`http://freegeoip.net/json/`, {
    method: 'GET',
    success: (res) => {
      console.log(res)
    },
    failure: (err) => {
      console.log(err)
    }
  })
}

export const loginSuccess = (user: Object) => (dispatch: Function) => {
  dispatch({ type: LOGIN_SUCCESS })
}

export const loginFailure = () => {
  return { type: LOGIN_FAILURE }
}

export const handleChangeEmail = (email) => (dispatch) => {
  dispatch({ type: CHANGE_EMAIL, email })
  dispatch(validate())
}

export const handleChangePassword = (password) => (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD, password })
  dispatch(validate())
}

export const validate = () => (dispatch, getState) => {
  const { email, password } = getState().Login
  dispatch({ type: VALIDATE, valid: !required(email) && !required(password) && !validEmail(email) })
}

export const validateEmail = () => (dispatch, getState) => {
  const { email } = getState().Login
  dispatch({ type: VALIDATE_EMAIL, emailError: validEmail(email) })
}

export const clearLoginData = () => ({ type: CLEAR })

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false,
  email: '',
  password: '',
  valid: false,
  emailError: false
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
  }),
  [CHANGE_EMAIL]: (state, { email }) => ({
    email
  }),
  [CHANGE_PASSWORD]: (state, { password }) => ({
    password
  }),
  [VALIDATE]: (state, { valid }) => ({
    valid
  }),
  [VALIDATE_EMAIL]: (state, { emailError }) => ({
    emailError
  }),

  [CLEAR]: (state, action) => ({
    // TODO
    loading: false,
    email: '',
    password: '',
    valid: false,
    emailError: false
  }),
})
