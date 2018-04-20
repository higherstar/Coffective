import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CAROUSEL_REQUEST = 'Carousel.GET_CAROUSEL_REQUEST'
export const GET_CAROUSEL_SUCCESS = 'Carousel.GET_CAROUSEL_SUCCESS'
export const GET_CAROUSEL_FAILURE = 'Carousel.GET_CAROUSEL_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getCarousel = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_CAROUSEL_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/wp/v2/welcome_guide`, {
    method: 'GET',
    token,
    success: (carousel) => {
      dispatch({type: GET_CAROUSEL_SUCCESS, carousel})
      console.log(carousel)
    },
    failure: () => dispatch({type: GET_CAROUSEL_FAILURE})
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  carousel: [],
}

export default createReducer(initialState, {
  [GET_CAROUSEL_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_CAROUSEL_SUCCESS]: (state, {carousel}) => ({
    loading: false,
    carousel,
  }),
  [GET_CAROUSEL_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
