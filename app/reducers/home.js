import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SLIDES_REQUEST = 'HOME.GET_SLIDES_REQUEST'
export const GET_SLIDES_SUCCESS = 'HOME.GET_SLIDES_SUCCESS'
export const GET_SLIDES_FAILURE = 'HOME.GET_SLIDES_FAILURE'

export const GET_HOMESCREEN_REQUEST = 'HOME.GET_HOMESCREEN_REQUEST'
export const GET_HOMESCREEN_SUCCESS = 'HOME.GET_HOMESCREEN_SUCCESS'
export const GET_HOMESCREEN_FAILURE = 'HOME.GET_HOMESCREEN_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getSlides = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_SLIDES_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/wp/v2/home_screen/articles`, {
    method: 'GET',
    token,
    success: (slides) => {
      console.log(slides);
      dispatch({type: GET_SLIDES_SUCCESS, slides})
    },
    failure: (err) => {
      dispatch({type: GET_SLIDES_FAILURE, error: err})
    }
  })
};

export const getHomeScreen = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_HOMESCREEN_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/wp/v2/home_screen`, {
    method: 'GET',
    token,
    success: (home) => {
      dispatch({type: GET_HOMESCREEN_SUCCESS, home})
    },
    failure: (err) => {
      dispatch({type: GET_HOMESCREEN_FAILURE, error: err})
    }
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  slides: [],
  home: []
}

export default createReducer(initialState, {
  [GET_SLIDES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_SLIDES_SUCCESS]: (state, {slides}) => ({
    loading: false,
    slides,
  }),
  [GET_SLIDES_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [GET_HOMESCREEN_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_HOMESCREEN_SUCCESS]: (state, {home}) => ({
    loading: false,
    home,
  }),
  [GET_HOMESCREEN_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
