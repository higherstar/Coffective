import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_COMMON_QUESTIONS_REQUEST = 'Faq.GET_COMMON_QUESTIONS_REQUEST'
export const GET_COMMON_QUESTIONS_SUCCESS = 'Faq.GET_COMMON_QUESTIONS_SUCCESS'
export const GET_COMMON_QUESTIONS_FAILURE = 'Faq.GET_COMMON_QUESTIONS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getCommonQuestions = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_COMMON_QUESTIONS_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/common-questions/`, {
    method: 'GET',
    token,
    success: (commonQuestions) => dispatch({type: GET_COMMON_QUESTIONS_SUCCESS, commonQuestions}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: GET_COMMON_QUESTIONS_FAILURE, error: err})
      dispatch({type: GET_COMMON_QUESTIONS_SUCCESS, commonQuestions: [
        {
          header: 'Does breastfeeding hurt?',
        },
        {
          header: 'When should I stop breastfeeding?',
        },
        {
          header: 'How to convince my partner to let me breastfeed',
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
  commonQuestions: [],
}

export default createReducer(initialState, {
  [GET_COMMON_QUESTIONS_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_COMMON_QUESTIONS_SUCCESS]: (state, {commonQuestions}) => ({
    loading: false,
    commonQuestions,
  }),
  [GET_COMMON_QUESTIONS_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
