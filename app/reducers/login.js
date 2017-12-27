import createReducer from '../createReducer'
import {getUser} from './user'

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
export const login = () => (dispatch, getState, {fetch}) => {
  dispatch({type: LOGIN_REQUEST})
  return fetch(`/login/`, {
    method: 'GET',
    success: (res) => dispatch({type: LOGIN_SUCCESS}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: LOGIN_FAILURE, error: err})
      dispatch(getUser())
    }
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
