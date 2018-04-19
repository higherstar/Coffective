import createReducer from '../createReducer'
import { NavigationActions as navigation } from 'react-navigation'
import { MessageBarManager } from 'react-native-message-bar'

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
    formData: true,
    body: {
      username: values.email,
      email: values.email,
      password: values.password,
      // TODO make it better and add other fields
      ...(name ? {name} : {}),
      ...(personType ? {roles: personType.value} : {}),
      // TODO improve formData object for nested fields - JSON.stringify needed for object in form data
      acf_data: JSON.stringify({
        ...(selectedState ? {state: selectedState} : {}),
        ...(age ? {age: age.value} : {}),
      }),
    },
    success: (user) => {
      dispatch({type: REGISTER_SUCCESS})
      dispatch(navigation.navigate({routeName: 'Login'}))
      MessageBarManager.showAlert({
        message: `You're registered successfully. Now you can login.`,
        alertType: 'success',
      })
    },
    failure: (error) => {
      dispatch({type: REGISTER_FAILURE})
      MessageBarManager.showAlert({
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
        alertType: 'error',
      })
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
  personType: null,
  name: '',
  selectedState: null,
  age: null,
  expectation: null,
}

export default createReducer(initialState, {
  [REGISTER_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    loading: false,
  }),
  [REGISTER_FAILURE]: (state, action) => ({
    loading: false,
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
    personType: null,
    name: '',
    selectedState: null,
    age: null,
    expectation: null,
  }),
})
