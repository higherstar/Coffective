import createReducer from '../createReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGOUT_REQUEST = 'User.LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'User.LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'User.LOGOUT_FAILURE'

export const GET_USER_REQUEST = 'User.GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'User.GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'User.GET_USER_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getToken = () => (dispatch, getState) => {
  // TODO backend
  return {token: 'temp'}
}

export const logoutSuccess = () => (dispatch, getState) => {
  dispatch({type: LOGOUT_SUCCESS})
}

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
    return fetch(`/user/me/`, {
      method: 'GET',
      token,
      success: (user) => dispatch({type: GET_USER_SUCCESS, user}),
      failure: (err) => {
        // TODO backend
        // dispatch({type: GET_USER_FAILURE, error: err})
        dispatch({type: GET_USER_SUCCESS, user: {
          first_name: 'John',
          last_name: 'Doe',
          image: 'https://dummyimage.com/60x60'
        }})
      }
    })
  } else {
    return user
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  // TODO
  loggedIn: true,
  error: null,
  user: {
    first_name: 'John',
    last_name: 'Doe',
    image: 'https://dummyimage.com/60x60'
  },
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
})
