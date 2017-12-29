import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CHECKLIST_REQUEST = 'BuildTeam.GET_CHECKLIST_REQUEST'
export const GET_CHECKLIST_SUCCESS = 'BuildTeam.GET_CHECKLIST_SUCCESS'
export const GET_CHECKLIST_FAILURE = 'BuildTeam.GET_CHECKLIST_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getChecklist = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_CHECKLIST_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/checklist/`, {
    method: 'GET',
    token,
    success: (checklist) => dispatch({type: GET_CHECKLIST_SUCCESS, checklist}),
    failure: (err) => {
      // TODO backend
      // dispatch({type: GET_CHECKLIST_FAILURE, error: err})
      dispatch({type: GET_CHECKLIST_SUCCESS, checklist: [
        {
          header: 'Get Ready',
          image: 'https://dummyimage.com/60x60',
          items: [
            {
              header: 'Have Champion Support',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Labor Begin On Own',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Comfort During Labor',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
          ]
        },
        {
          header: 'Fall In Love',
          image: 'https://dummyimage.com/60x60',
          items: [
            {
              header: 'Initial Skin to skin',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Magical First Hour',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Baby\'s First Feed',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Delayed Procedure',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
          ]
        },
        {
          header: 'Get Ready',
          image: 'https://dummyimage.com/60x60',
          items: [
            {
              header: 'Have Champion Support',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Labor Begin On Own',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Comfort During Labor',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
          ]
        },
        {
          header: 'Fall In Love',
          image: 'https://dummyimage.com/60x60',
          items: [
            {
              header: 'Initial Skin to skin',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Magical First Hour',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Baby\'s First Feed',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Delayed Procedure',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
          ]
        },
        {
          header: 'Get Ready',
          image: 'https://dummyimage.com/60x60',
          items: [
            {
              header: 'Have Champion Support',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Labor Begin On Own',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
            {
              header: 'Comfort During Labor',
              description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
            },
          ]
        }
      ]})
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  checklist: [],
}

export default createReducer(initialState, {
  [GET_CHECKLIST_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_CHECKLIST_SUCCESS]: (state, {checklist}) => ({
    loading: false,
    checklist,
  }),
  [GET_CHECKLIST_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
