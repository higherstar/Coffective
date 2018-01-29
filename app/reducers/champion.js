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
    success: (categories) => dispatch({type: INVITE_CHAMPION_SUCCESS, categories}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: INVITE_CHAMPION_FAILURE, error: err})
      dispatch({type: INVITE_CHAMPION_SUCCESS, categories: [
        {
          header: 'Choose your Champion',
          description: `There are a few things to consider when choosing and communicating with a champion.`,
          image: 'https://dummyimage.com/320x240',
        },
        {
          header: 'Choose your Hospital',
          description: `There are a few things to consider when choosing a hospital to ensure you are receiving the best care possible.`,
          image: 'https://dummyimage.com/320x240',
        },
        {
          header: 'Are you Eligible for WIC?',
          description: `WIC income eligibility is higher that many people think. There are few things to consider before choosing the clinic that is right for you.`,
          image: 'https://dummyimage.com/320x240',
          screen: 'Wic',
        },
        {
          header: 'Choose your Doctor or Midwife',
          description: `You healthcare provider plays a critical role in helping you set and reach your goals. Be sure to share your wishes!`,
          image: 'https://dummyimage.com/320x240',
        },
        {
          header: 'Choose your Baby’s Doctor',
          description: `Your baby’s healthcare provider plays a critical role in ensuring things go well in the hospital and once you get home.`,
          image: 'https://dummyimage.com/320x240',
        },
      ]})
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
  invited: true,
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
