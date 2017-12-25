// @flow

import { takeLatest } from 'redux-saga/effects'
import { STARTUP } from '../Redux/StartupRedux'
import { LOGIN_REQUEST } from '../Redux/LoginRedux'
import { GET_CITY_REQUEST } from '../Redux/RegistrationRedux'
import { startup } from './StartupSagas'
import { login } from './LoginSaga'
import { getCity } from './ZipSaga'

// ------------------------------------
// Connect Types to Sagas
// ------------------------------------
export default function * root (): Generator<any, any, void> {
  yield [
    takeLatest(STARTUP, startup),
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(GET_CITY_REQUEST, getCity),
  ]
}
