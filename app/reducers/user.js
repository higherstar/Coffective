import createReducer from '../createReducer'
import {AsyncStorage} from 'react-native'
import { TOKEN_STORAGE_KEY } from '../constants'
import { NavigationActions as navigation } from 'react-navigation'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGOUT_REQUEST = 'User.LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'User.LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'User.LOGOUT_FAILURE'

export const GET_USER_REQUEST = 'User.GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'User.GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'User.GET_USER_FAILURE'

export const SET_TOKEN = 'User.SET_TOKEN'
export const EXPIRE_TOKEN = 'User.EXPIRE_TOKEN'

// ------------------------------------
// Actions
// ------------------------------------
export const expireToken = () => (dispatch, getState) => {
  AsyncStorage.removeItem(TOKEN_STORAGE_KEY)
  dispatch({type: EXPIRE_TOKEN})
}

export const logoutSuccess = () => (dispatch) => {
  dispatch(expireToken())
  dispatch({type: LOGOUT_SUCCESS})
}

export const getToken = () => (dispatch, getState) => {
  const {token} = getState().user
  return {token}
}

export const getTokenFromStorage = () => async (dispatch, getState) => {
  // await AsyncStorage.clear()
  const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY)
  if (token) {
    dispatch(setToken(token))
  }
}

export const setToken = (token) => (dispatch, getState) => {
  AsyncStorage.setItem(TOKEN_STORAGE_KEY, token)
  dispatch({type: SET_TOKEN, token})
}

// TODO add logout
export const logout = () => (dispatch, getState, {fetch}) => {
  const {token} = dispatch(getToken())
  dispatch({type: LOGOUT_REQUEST})
  return fetch(`/auth/revoke-token/`, {
    method: 'POST',
    token,
    body: {
      token,
    },
    success: (res) => dispatch(logoutSuccess(res)),
    failure: (err) => dispatch({type: LOGOUT_FAILURE, err})
  })
}

export const getUser = () => (dispatch, getState, {fetch}) => {
  const {token} = dispatch(getToken())
  const {user} = getState().user
  if (!user && token) {
    dispatch({type: GET_USER_REQUEST})
    return fetch(`/wp/v2/users/me`, {
      method: 'GET',
      token,
      success: (user) => {
        dispatch({type: GET_USER_SUCCESS, user})
        dispatch(navigation.navigate({ routeName: 'App' }))
      },
      failure: (err) => {
        // TODO show error
        dispatch({type: GET_USER_FAILURE})
        dispatch(navigation.navigate({ routeName: 'Auth' }))
      }
    })
  } else {
    dispatch(navigation.navigate({ routeName: 'Auth' }))
    return user
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  loggedIn: false,
  error: null,
  user: null,
  token: null,
}

export default createReducer(initialState, {
  [LOGOUT_SUCCESS]: (state, action) => ({
    loading: false,
    loggedIn: false,
    error: null,
    user: null,
  }),
  [LOGOUT_FAILURE]: (state, {error}) => ({
    error,
  }),
  [GET_USER_SUCCESS]: (state, {user}) => ({
    user,
    loggedIn: true,
  }),
  [SET_TOKEN]: (state, {token}) => ({
    token,
  }),
  [EXPIRE_TOKEN]: (state, action) => ({
    token: null,
  }),
})
