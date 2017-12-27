import createReducer from '../createReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const REGISTER_REQUEST = 'Register.REQUEST'
export const REGISTER_SUCCESS = 'Register.SUCCESS'
export const REGISTER_FAILURE = 'Register.FAILURE'

export const SET_PERSON_TYPE = 'Register.SET_PERSON_TYPE'

export const CLEAR = 'Register.CLEAR'

// ------------------------------------
// Actions
// ------------------------------------
export const register = (values) => (dispatch, getState, {fetch}) => {
  dispatch({type: REGISTER_REQUEST})
  return fetch(`/user/me/`, {
    method: 'POST',
    body: {
      email: values.email,
      password: values.password,
    },
    success: (res) => dispatch({type: REGISTER_SUCCESS, success: ''}),
    failure: (err) => dispatch({type: REGISTER_FAILURE, error: ''})
  })
}

export const setPersonType = (personType) => ({type: SET_PERSON_TYPE, personType})

export const clear = () => ({type: CLEAR})


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  error: null,
  success: null,
  personType: null,
}

export default createReducer(initialState, {
  [REGISTER_REQUEST]: (state, action) => ({
    loading: true,
    error: null,
    success: null,
  }),
  [REGISTER_SUCCESS]: (state, {success}) => ({
    loading: false,
    success,
  }),
  [REGISTER_FAILURE]: (state, {error}) => ({
    loading: false,
    error,
  }),
  [SET_PERSON_TYPE]: (state, {personType}) => ({
    personType,
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
    error: null,
    success: null,
  }),
})
