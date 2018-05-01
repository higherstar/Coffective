import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PLACES_REQUEST = 'FindSupport.GET_PLACES_REQUEST'
export const GET_PLACES_SUCCESS = 'FindSupport.GET_PLACES_SUCCESS'
export const GET_PLACES_FAILURE = 'FindSupport.GET_PLACES_FAILURE'

export const CHANGE_ZIP_CODE = 'FindSupport.CHANGE_ZIP_CODE'
export const CHANGE_ORG_TYPE = 'FindSupport.CHANGE_ORG_TYPE'

// ------------------------------------
// Actions
// ------------------------------------
export const getPlaces = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_PLACES_REQUEST})
  const {zipCode, orgType} = getState().findSupport
  console.log(orgType);
  console.log(zipCode);
  const {token} = dispatch(getToken())
  return fetch(`/wp/v2/resources/${zipCode ? `zipcode=${zipCode}/` : ''}${orgType ? `type=${orgType}/` : ''}`, {
    method: 'GET',
    token,
    success: (places) => {
      console.log(places);
      dispatch({type: GET_PLACES_SUCCESS, places})
    },
    failure: (err) => {
      dispatch({type: GET_PLACES_FAILURE, error: err})
    }
  })
}

export const changeZipCode = (zipCode) => ({type: CHANGE_ZIP_CODE, zipCode})

export const changeOrgType = (orgType) => ({type: CHANGE_ORG_TYPE, orgType})

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  places: [],
  zipCode: '',
  orgType: null,
}

export default createReducer(initialState, {
  [GET_PLACES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_PLACES_SUCCESS]: (state, {places}) => ({
    loading: false,
    places,
  }),
  [GET_PLACES_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [CHANGE_ZIP_CODE]: (state, {zipCode}) => ({
    zipCode,
  }),
  [CHANGE_ORG_TYPE]: (state, {orgType}) => ({
    orgType,
  }),
})
