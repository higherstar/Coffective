import createReducer from '../createReducer'
// import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_NUMBER_REQUEST = 'WICELIGIBLE.GET_NUMBER_REQUEST'
export const GET_NUMBER_SUCCESS = 'WICELIGIBLE.GET_NUMBER_SUCCESS'
export const GET_NUMBER_FAILURE = 'WICELIGIBLE.GET_NUMBER_FAILURE'

export const GET_DESCRIPTION_REQUEST = 'WICELIGIBLE.GET_DESCRIPTION_REQUEST'
export const GET_DESCRIPTION_SUCCESS = 'WICELIGIBLE.GET_DESCRIPTION_SUCCESS'
export const GET_DESCRIPTION_FAILURE = 'WICELIGIBLE.GET_DESCRIPTION_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getNumber = (number) => (dispatch, getState, { fetch }) => {
  dispatch({ type: GET_NUMBER_REQUEST });
  return fetch(`/wp/v2/wic/number=`+number, {
    method: 'GET',
    // token,
    success: number => dispatch({ type: GET_NUMBER_SUCCESS, number }),
    failure: () => dispatch({ type: GET_NUMBER_FAILURE })
  })
};

export const getDescription = () => (dispatch, getState, { fetch }) => {
  dispatch({ type: GET_DESCRIPTION_REQUEST });
  return fetch(`/wp/v2/wic/description`, {
    method: 'GET',
    // token,
    success: (description) => dispatch({ type: GET_DESCRIPTION_SUCCESS, description }),
    failure: () => dispatch({ type: GET_DESCRIPTION_FAILURE })
  })
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  number: [],
  description: {},
}

export default createReducer(initialState, {
  [GET_NUMBER_REQUEST]: (state, action) => ({
    loading: true
  }),
  [GET_NUMBER_SUCCESS]: (state, { number }) => ({
    loading: false,
    number
  }),
  [GET_NUMBER_FAILURE]: (state, action) => ({
    loading: false
  }),
  [GET_DESCRIPTION_REQUEST]: (state, action) => ({
    loading: true
  }),
  [GET_DESCRIPTION_SUCCESS]: (state, { description }) => ({
    loading: false,
    description
  }),
  [GET_DESCRIPTION_FAILURE]: (state, action) => ({
    loading: false
  })
})
