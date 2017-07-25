// @flow

import { takeLatest } from 'redux-saga/effects'
import { STARTUP } from '../Redux/StartupRedux'
import { GET_USER_REQUEST } from '../Redux/UserRedux'
import { LOGIN_REQUEST } from '../Redux/LoginRedux'
import { REGISTER_REQUEST } from '../Redux/RegistrationRedux'
import { GET_CHECKLIST_GROUPS_REQUEST } from '../Redux/ChecklistRedux'
import { FORGOT_PASSWORD_REQUEST } from '../Redux/ForgotPasswordRedux'
import { RESET_PASSWORD_REQUEST } from '../Redux/ResetPasswordRedux'
import { startup } from './StartupSagas'
import { getUser } from './GetUserSaga'
import { login } from './LoginSaga'
import { register } from './RegisterSaga'
import { forgotPassword } from './ForgotPasswordSaga'
import { resetPassword } from './ResetPasswordSaga'
import { getChecklistGroups } from './GetChecklistSaga'

// ------------------------------------
// Connect Types to Sagas
// ------------------------------------
export default function * root (): Generator<any, any, void> {
  yield [
    takeLatest(STARTUP, startup),
    takeLatest(GET_USER_REQUEST, getUser),
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(REGISTER_REQUEST, register),
    takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword),
    takeLatest(RESET_PASSWORD_REQUEST, resetPassword),
    takeLatest(GET_CHECKLIST_GROUPS_REQUEST, getChecklistGroups),
  ]
}
