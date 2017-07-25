// @flow

import createReducer from '../Services/ReduxEnhancer'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CHECKLIST_GROUPS_REQUEST = 'Checklist.GET_REQUEST'
export const GET_CHECKLIST_GROUPS_SUCCESS = 'Checklist.GET_SUCCESS'
export const GET_CHECKLIST_GROUPS_FAILURE = 'Checklist.GET_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getChecklistGroups = () => ({
  type: GET_CHECKLIST_GROUPS_REQUEST,
  responseSuccess: getChecklistGroupsSuccess,
  responseFailure: getChecklistGroupsFailure
})

export const getChecklistGroupsSuccess = (checklistGroups: Object[]) => ({
  type: GET_CHECKLIST_GROUPS_SUCCESS,
  checklistGroups,
})
export const getChecklistGroupsFailure = () => ({ type: GET_CHECKLIST_GROUPS_FAILURE })

// ------------------------------------
// Reducer
// ------------------------------------
export const INITIAL_STATE = {
  checklistGroups: []
}

export default createReducer(INITIAL_STATE, {
  [GET_CHECKLIST_GROUPS_SUCCESS]: (state, { checklistGroups }) => ({
    checklistGroups: checklistGroups
  })
})
