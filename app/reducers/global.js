// @flow

import createReducer from '../createReducer'

export const STARTUP = 'STARTUP'

export const startup = () => ({ type: STARTUP })

export const INITIAL_STATE = {}

export default createReducer(INITIAL_STATE)
