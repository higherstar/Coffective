// @flow

import createReducer from '../Services/ReduxEnhancer'

export const STARTUP = 'STARTUP'

export const startup = () => ({ type: STARTUP })

export const INITIAL_STATE = {}

export default createReducer(INITIAL_STATE)
