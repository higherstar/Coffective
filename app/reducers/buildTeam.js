import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CATEGORIES_REQUEST = 'BuildTeam.GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'BuildTeam.GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'BuildTeam.GET_CATEGORIES_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getCategories = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_CATEGORIES_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/categories/`, {
    method: 'GET',
    token,
    success: (categories) => dispatch({type: GET_CATEGORIES_SUCCESS, categories}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: GET_CATEGORIES_FAILURE, error: err})
      dispatch({type: GET_CATEGORIES_SUCCESS, categories: [
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

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  categories: [],
}

export default createReducer(initialState, {
  [GET_CATEGORIES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_CATEGORIES_SUCCESS]: (state, {categories}) => ({
    loading: false,
    categories,
  }),
  [GET_CATEGORIES_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
