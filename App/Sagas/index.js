// @flow

import { takeLatest } from 'redux-saga/effects'
import { STARTUP } from '../Redux/StartupRedux'
import { GET_USER_REQUEST } from '../Redux/UserRedux'
import { LOGIN_REQUEST } from '../Redux/LoginRedux'
import { REGISTER_REQUEST } from '../Redux/RegistrationRedux'
import { startup } from './StartupSagas'
import { getUser } from './GetUserSaga'
import { login } from './LoginSaga'
import { register } from './RegisterSaga'

// ------------------------------------
// Connect Types to Sagas
// ------------------------------------
export default function * root (): Generator<any, any, void> {
  yield [
    takeLatest(STARTUP, startup),
    takeLatest(GET_USER_REQUEST, getUser),
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(REGISTER_REQUEST, register),
  ]
}
