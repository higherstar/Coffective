import createReducer from '../createReducer'

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
  return fetch(`/carousel/`, {
    method: 'GET',
    success: (carousel) => dispatch({type: GET_CAROUSEL_SUCCESS, carousel}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: GET_CAROUSEL_FAILURE, error: err})
      dispatch({type: GET_CAROUSEL_SUCCESS, carousel: [
        {
          header: 'Title 1',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/320x240',
        },
        {
          header: 'Title 2',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/320x240',
        },
        {
          header: 'Title 3',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
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
