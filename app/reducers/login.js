import createReducer from '../createReducer'
import { getUser, setToken } from './user'
import { NavigationActions as navigation } from 'react-navigation'
import { MessageBarManager } from 'react-native-message-bar'

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
      username: values.email,
      password: values.password,
    },
    success: (res) => {
      dispatch(loginSuccess(res))
      MessageBarManager.showAlert({
        message: `You are successfully logged in.`,
        alertType: 'success',
      })
    },
    failure: (error) => {
      dispatch({type: LOGIN_FAILURE})
      MessageBarManager.showAlert({
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
        alertType: 'error',
      })
    }
  })
}

export const loginSuccess = (auth) => (dispatch, getState) => {
  dispatch({type: LOGIN_SUCCESS});
  dispatch(setToken(auth.token));
  dispatch(getUser());
  dispatch(navigation.navigate({routeName: 'Home'}))
}

export const clear = () => ({type: CLEAR})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
}

export default createReducer(initialState, {
  [LOGIN_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    loading: false,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
  }),
})
