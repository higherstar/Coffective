import createReducer from '../createReducer'
import { getUser, setToken } from './user'
import { NavigationActions as navigation } from 'react-navigation'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'Login.LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'Login.LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'Login.LOGIN_FAILURE'

export const CLEAR = 'Login.CLEAR'

// ------------------------------------
// Actions
// ------------------------------------
export const login = (values) => (dispatch, getState, {fetch}) => {
  dispatch({type: LOGIN_REQUEST})
  return fetch(`/jwt-auth/v1/token`, {
    method: 'POST',
    body: {
      // TODO
      username: 'serhii',
      password: 'qwerty@123',
    },
    success: (res) => dispatch(loginSuccess(res)),
    failure: (err) => {
      // TODO show error
      dispatch({type: LOGIN_FAILURE})
    }
  })
}

export const loginSuccess = (auth) => (dispatch, getState) => {
  dispatch({type: LOGIN_SUCCESS})
  dispatch(setToken(auth.token))
  dispatch(getUser())
  dispatch(navigation.navigate({ routeName: 'Home' }))
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
  [LOGIN_REQUEST]: (state, action) => ({
    loading: true,
    success: null,
    error: null,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    loading: false,
    error: null,
  }),
  [LOGIN_FAILURE]: (state, {error}) => ({
    loading: false,
    error,
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
    success: null,
    error: null,
  }),
})
