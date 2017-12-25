// @flow

import createReducer from '../Services/ReduxEnhancer'
import { clearRegisterData } from './RegistrationRedux'
import { clearLoginData } from './LoginRedux'
// ------------------------------------
// Constants
// ------------------------------------
export const SET_PERSON_TYPE = 'User.SET_PERSON_TYPE'
export const SET_AGE_RANGE = 'User.SET_AGE_RANGE'
export const SET_DUE_DATE = 'User.SET_DUE_DATE'
export const SET_ETHNICITY = 'User.SET_ETHNICITY'
export const SET_NOTIFICATIONS = 'User.SET_NOTIFICATIONS'
export const SET_FEEDBACK = 'User.SET_FEEDBACK'
export const CLEAR = 'User.CLEAR'
export const SET_SLIDE_INDEX = 'User.SET_SLIDE_INDEX'

// ------------------------------------
// Actions
// ------------------------------------

export const setPersonType = (personType) => ({type: SET_PERSON_TYPE, personType})

export const setAgeRange = (ageRange) => ({type: SET_AGE_RANGE, ageRange})

export const setDueDate = (dueDate) => ({type: SET_DUE_DATE, dueDate})

export const setEthnicity = (ethnicity) => ({type: SET_ETHNICITY, ethnicity})

export const setNotifications = (notifications) => ({type: SET_NOTIFICATIONS, notifications})

export const setFeedback = (feedback) => ({type: SET_FEEDBACK, feedback})

export const clearUserData = () => (dispatch) => {
  dispatch({type: CLEAR})
  dispatch(clearRegisterData())
  dispatch(clearLoginData())
}

export const changeSlide = (slideIndex) => ({type: SET_SLIDE_INDEX, slideIndex})

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  personType: null,
  ageRange: null,
  dueDate: '',
  ethnicity: '',
  notifications: null,
  feedback: null,
  slideIndex: 0,
}

export default createReducer(INITIAL_STATE, {
  [SET_PERSON_TYPE]: (state, {personType}) => ({
    personType
  }),
  [SET_AGE_RANGE]: (state, {ageRange}) => ({
    ageRange
  }),
  [SET_DUE_DATE]: (state, {dueDate}) => ({
    dueDate
  }),
  [SET_ETHNICITY]: (state, {ethnicity}) => ({
    ethnicity
  }),
  [SET_NOTIFICATIONS]: (state, {notifications}) => ({
    notifications
  }),
  [SET_FEEDBACK]: (state, {feedback}) => ({
    feedback
  }),
  [SET_SLIDE_INDEX]: (state, {slideIndex}) => ({
    slideIndex
  }),
  [CLEAR]: (state, action) => ({
    // TODO improve
    personType: null,
    ageRange: null,
    dueDate: '',
    ethnicity: '',
    notifications: null,
    feedback: null,
  }),
})
