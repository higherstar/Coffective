// @flow

import createReducer from '../Services/ReduxEnhancer'

// ------------------------------------
// Constants
// ------------------------------------

export const CHANGE_FIRST_NAME = 'Register.CHANGE_FIRST_NAME'
export const CHANGE_LAST_NAME = 'Register.CHANGE_LAST_NAME'
export const CHANGE_ZIP = 'Register.CHANGE_ZIP'
export const VALIDATE = 'Register.VALIDATE'
export const VALIDATE_ZIP = 'Register.VALIDATE_ZIP'

export const GET_CITY_REQUEST = 'Register.GET_CITY_REQUEST'
export const GET_CITY_SUCCESS = 'Register.GET_CITY_SUCCESS'
export const GET_CITY_FAILURE = 'Register.GET_CITY_FAILURE'

export const CLEAR = 'Register.CLEAR'

const required = value => value ? undefined : 'Required'
const validZip = value =>
  value && value.length === 5 && /^[0-9]+$/.test(value) ? undefined : 'Invalid zip code'

// ------------------------------------
// Actions
// ------------------------------------

export const handleChangeFirstName = (firstName) => (dispatch) => {
  dispatch({ type: CHANGE_FIRST_NAME, firstName })
  dispatch(validate())
}

export const handleChangeLastName = (lastName) => (dispatch) => {
  dispatch({ type: CHANGE_LAST_NAME, lastName })
  dispatch(validate())
}

export const handleChangeZip = (zip) => (dispatch) => {
  dispatch({ type: CHANGE_ZIP, zip })
  if (!validZip(zip)) {
    dispatch(getCity(zip))
  }
  dispatch(validateZip())
  dispatch(validate())
}

export const validate = () => (dispatch, getState) => {
  const { firstName, lastName, zip, zipError, zipDetails } = getState().Registration
  dispatch({ type: VALIDATE, valid: !required(firstName) && !required(lastName) && !required(zip) && !validZip(zip) && !zipError && zipDetails})
}

export const getCity = (zip) => (dispatch, getState) => {
  dispatch({
    type: GET_CITY_REQUEST,
    zip,
    responseSuccess: getCitySuccess,
    responseFailure: getCityFailure,
  })
}

export const getCitySuccess = (zipDetails) => (dispatch) => {
  dispatch({type: GET_CITY_SUCCESS, zipDetails})
  dispatch(validate())
}

export const getCityFailure = (zipError) => (dispatch) => {
  dispatch({type: GET_CITY_FAILURE, zipError: true})
  dispatch(validate())
}

export const validateZip = () => (dispatch, getState) => {
  const { zip } = getState().Registration
  dispatch({ type: VALIDATE_ZIP, zipError: !!validZip(zip) })
}

export const clearRegisterData = () => ({ type: CLEAR })

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  loading: false,
  firstName: '',
  lastName: '',
  zip: '',
  valid: false,
  zipError: false,
  zipDetails: null,
}

export default createReducer(INITIAL_STATE, {
  [CHANGE_FIRST_NAME]: (state, { firstName }) => ({
    firstName
  }),
  [CHANGE_LAST_NAME]: (state, { lastName }) => ({
    lastName
  }),
  [CHANGE_ZIP]: (state, { zip }) => ({
    zip
  }),
  [VALIDATE]: (state, { valid }) => ({
    valid
  }),
  [VALIDATE_ZIP]: (state, { zipError }) => ({
    zipError
  }),
  [GET_CITY_SUCCESS]: (state, {zipDetails}) => ({
    zipDetails,
    zipError: false
  }),
  [GET_CITY_FAILURE]: (state, {zipError}) => ({
    zipDetails: null,
    zipError
  }),
  [CLEAR]: (state, action) => ({
    // TODO
    loading: false,
    firstName: '',
    lastName: '',
    zip: '',
    valid: false,
    zipError: false,
    zipDetails: null,
  }),
})
