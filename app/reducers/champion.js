import createReducer from '../createReducer'
import { getToken, setUser } from './user'
import { MessageBarManager } from 'react-native-message-bar'

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
export const inviteChampion = (values) => (dispatch, getState, {fetch}) => {
  dispatch({type: INVITE_CHAMPION_REQUEST})
  const {token} = dispatch(getToken())
  const {user} = getState().user
  const {role} = getState().champion
  return fetch(`/wp/v2/users/${user.id}`, {
    method: 'POST',
    formData: true,
    body: {
      // TODO improve formData object for nested fields
      acf_data: JSON.stringify({
        ...values,
        champion_role: role,
      })
    },
    token,
    success: (updatedUser) => {
      dispatch(setUser(updatedUser))
      dispatch(setInvited(true))
      dispatch({type: INVITE_CHAMPION_SUCCESS})
      MessageBarManager.showAlert({
        message: `Champion invited.`,
        alertType: 'success',
      })
    },
    failure: (error) => {
      dispatch({type: INVITE_CHAMPION_FAILURE})
      MessageBarManager.showAlert({
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
        alertType: 'error',
      })
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
