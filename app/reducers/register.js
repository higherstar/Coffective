import createReducer from '../createReducer'
import { NavigationActions as navigation } from 'react-navigation'

// ------------------------------------
// Constants
// ------------------------------------
export const REGISTER_REQUEST = 'Register.REQUEST'
export const REGISTER_SUCCESS = 'Register.SUCCESS'
export const REGISTER_FAILURE = 'Register.FAILURE'

export const SET_PERSON_TYPE = 'Register.SET_PERSON_TYPE'
export const SET_NAME = 'Register.SET_NAME'
export const SELECT_STATE = 'Register.SELECT_STATE'
export const SET_AGE = 'Register.SET_AGE'
export const SET_EXPECTATION = 'Register.SET_EXPECTATION'

export const CLEAR = 'Register.CLEAR'

// ------------------------------------
// Actions
// ------------------------------------
export const register = (values) => (dispatch, getState, {fetch}) => {
  dispatch({type: REGISTER_REQUEST})
  const {personType, name, selectedState, age, expectation} = getState().register
  return fetch(`/wp/v2/users`, {
    method: 'POST',
    body: {
      username: values.email,
      email: values.email,
      password: values.password,
      name: name,
      roles: personType ? [personType.value] : []
    },
    success: (user) => {
      dispatch({type: REGISTER_SUCCESS})
      dispatch(navigation.navigate({ routeName: 'Login' }))
      // TODO
      // dispatch(updateUser({
      //   id: user.id,
      //   state: selectedState,
      //   age: age,
      // }))
    },
    failure: (err) => {
      dispatch({type: REGISTER_FAILURE})
    }
  })
}

export const setPersonType = (personType) => ({type: SET_PERSON_TYPE, personType})

export const setName = (name) => ({type: SET_NAME, name})

export const selectState = (selectedState) => ({type: SELECT_STATE, selectedState})

export const setAge = (age) => ({type: SET_AGE, age})

export const setExpectation = (expectation) => ({type: SET_EXPECTATION, expectation})

export const clear = () => ({type: CLEAR})


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  error: null,
  success: null,
  personType: null,
  name: '',
  selectedState: null,
  age: null,
  expectation: null,
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
  [SET_NAME]: (state, {name}) => ({
    name,
  }),
  [SELECT_STATE]: (state, {selectedState}) => ({
    selectedState
  }),
  [SET_AGE]: (state, {age}) => ({
    age
  }),
  [SET_EXPECTATION]: (state, {expectation}) => ({
    expectation
  }),
  [CLEAR]: (state, action) => ({
    loading: false,
    error: null,
    success: null,
  }),
})
