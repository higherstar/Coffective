import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PLACES_REQUEST = 'FindSupport.GET_PLACES_REQUEST'
export const GET_PLACES_SUCCESS = 'FindSupport.GET_PLACES_SUCCESS'
export const GET_PLACES_FAILURE = 'FindSupport.GET_PLACES_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getPlaces = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_PLACES_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/resources`, {
    method: 'GET',
    token,
    success: (places) => dispatch({type: GET_PLACES_SUCCESS, places}),
    failure: (err) => {
      dispatch({type: GET_PLACES_FAILURE, error: err})
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  places: [],
}

export default createReducer(initialState, {
  [GET_PLACES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_PLACES_SUCCESS]: (state, {places}) => ({
    loading: false,
    places,
  }),
  [GET_PLACES_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
