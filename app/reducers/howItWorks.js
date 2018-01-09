import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SECTIONS_REQUEST = 'HowItWorks.GET_SECTIONS_REQUEST'
export const GET_SECTIONS_SUCCESS = 'HowItWorks.GET_SECTIONS_SUCCESS'
export const GET_SECTIONS_FAILURE = 'HowItWorks.GET_SECTIONS_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getSections = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_SECTIONS_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/common-questions/`, {
    method: 'GET',
    token,
    success: (sections) => dispatch({type: GET_SECTIONS_SUCCESS, sections}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: GET_SECTIONS_FAILURE, error: err})
      dispatch({type: GET_SECTIONS_SUCCESS, sections: [
        {
          header: 'HOSPITAL PREPARATION CHECKLIST',
          description: 'Use this list of best practices to guide your preparation and ensure you and baby get off to a great start together.',
        },
        {
          header: 'HOW-TO INFORMATION',
          description: 'Walk through the step-by-step instructions for each topic from mom’s, baby’s, and/or champion’s perspective.'
        },
        {
          header: 'FAQ’S & OVERCOMING BARRIERS',
          description: 'Dive deeper with answers to common questions and advice for overcoming barriers you might face labeled “you can do it even when”.'
        },
        {
          header: 'I’M PREPARED & WANT',
          description: 'After you’ve learned about each topic, check the box to show you’re prepared for and want that best practice if it’s available at  your hospital. Before you go into labor, share the list with your care team.'
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
  sections: [],
}

export default createReducer(initialState, {
  [GET_SECTIONS_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_SECTIONS_SUCCESS]: (state, {sections}) => ({
    loading: false,
    sections,
  }),
  [GET_SECTIONS_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
