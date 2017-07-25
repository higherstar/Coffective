// @flow

import createReducer from '../Services/ReduxEnhancer'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_USER_REQUEST = 'User.GET_REQUEST'
export const GET_USER_SUCCESS = 'User.GET_SUCCESS'
export const GET_USER_FAILURE = 'User.GET_FAILURE'

export const LOGOUT = 'User.LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export const getUser = () => ({
  type: GET_USER_REQUEST,
  responseSuccess: getUserSuccess,
  responseFailure: getUserFailure
})

export const getUserSuccess = (user: Object) => (dispatch: Function) => {
  // NavigationActions.chooseCategory({ type: 'reset' })
  dispatch({ type: GET_USER_SUCCESS, user })
}

export const getUserFailure = () => ({ type: GET_USER_FAILURE })

export const logout = () => (dispatch: Function) => {
  // NavigationActions.welcome({ type: 'reset' })
  dispatch({ type: LOGOUT })
}

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  user: null,
  loggedIn: false
}

export default createReducer(INITIAL_STATE, {
  [GET_USER_REQUEST]: (state, action) => ({
    user: null,
    loggedIn: false
  }),
  [GET_USER_SUCCESS]: (state, { user }) => ({
    user,
    loggedIn: true
  }),
  [GET_USER_FAILURE]: (state, action) => ({
    user: null,
    loggedIn: false
  }),
  [LOGOUT]: (state, action) => ({
    user: null,
    loggedIn: false
  })
})
