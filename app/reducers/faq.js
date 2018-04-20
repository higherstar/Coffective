import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_QUESTIONS_REQUEST = 'Faq.GET_QUESTIONS_REQUEST'
export const GET_QUESTIONS_SUCCESS = 'Faq.GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_FAILURE = 'Faq.GET_QUESTIONS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getQuestions = ({search} = {}) => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_QUESTIONS_REQUEST})
  const {token} = dispatch(getToken())
  // backend should use query params
  return fetch(`/wp/v2/faq/${search ? `search=${search}/` : ''}`, {
    method: 'GET',
    token,
    success: (questions) => dispatch({type: GET_QUESTIONS_SUCCESS, questions}),
    failure: () => dispatch({type: GET_QUESTIONS_FAILURE})
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  questions: [],
}

export default createReducer(initialState, {
  [GET_QUESTIONS_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_QUESTIONS_SUCCESS]: (state, {questions}) => ({
    loading: false,
    questions,
  }),
  [GET_QUESTIONS_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
