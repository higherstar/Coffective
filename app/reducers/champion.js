import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const INVITE_CHAMPION_REQUEST = 'Champion.INVITE_CHAMPION_REQUEST'
export const INVITE_CHAMPION_SUCCESS = 'Champion.INVITE_CHAMPION_SUCCESS'
export const INVITE_CHAMPION_FAILURE = 'Champion.INVITE_CHAMPION_FAILURE'

export const SET_ROLE = 'Champion.SET_ROLE'
export const SET_INVITED = 'Champion.SET_INVITED'

// ------------------------------------
// Actions
// ------------------------------------
export const inviteChampion = () => (dispatch, getState, {fetch}) => {
  dispatch({type: INVITE_CHAMPION_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/invite-champion/`, {
    method: 'GET',
    token,
    success: () => dispatch({type: INVITE_CHAMPION_SUCCESS}),
    failure: () => {
      // TODO backend
      dispatch({type: INVITE_CHAMPION_FAILURE})
    }
  })
}

export const setRole = (role) => ({type: SET_ROLE, role})

export const setInvited = (invited) => ({type: SET_INVITED, invited})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  role: null,
  invited: false,
}

export default createReducer(initialState, {
  [INVITE_CHAMPION_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [INVITE_CHAMPION_SUCCESS]: (state, action) => ({
    loading: false,
  }),
  [INVITE_CHAMPION_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [SET_ROLE]: (state, {role}) => ({
    role,
  }),
  [SET_INVITED]: (state, {invited}) => ({
    invited,
  }),
})
