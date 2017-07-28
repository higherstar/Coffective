// @flow

import { takeLatest } from 'redux-saga/effects'
import { STARTUP } from '../Redux/StartupRedux'
import { LOGIN_REQUEST } from '../Redux/LoginRedux'
import { REGISTER_REQUEST } from '../Redux/RegistrationRedux'
import { GET_CITY_REQUEST } from '../Redux/UserRedux'
import { startup } from './StartupSagas'
import { login } from './LoginSaga'
import { register } from './RegisterSaga'
import { getCity } from './ZipSaga'

// ------------------------------------
// Connect Types to Sagas
// ------------------------------------
export default function * root (): Generator<any, any, void> {
  yield [
    takeLatest(STARTUP, startup),
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(REGISTER_REQUEST, register),
    takeLatest(GET_CITY_REQUEST, getCity),
  ]
}
