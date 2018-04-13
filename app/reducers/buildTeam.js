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
  return fetch(`/build_your_team`, {
    method: 'GET',
    token,
    success: (categories) => dispatch({type: GET_CATEGORIES_SUCCESS, categories}),
    failure: () => dispatch({type: GET_CATEGORIES_FAILURE})
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
