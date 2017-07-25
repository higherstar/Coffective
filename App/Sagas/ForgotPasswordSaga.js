// @flow

import { put } from 'redux-saga/effects'
import API from '../Sagas/ApiSaga'
import { SubmissionError } from 'redux-form'

type TForgotPassword = {
  data: Object,
  responseSuccess: Function,
  responseFailure: Function,
  resolve: Function,
  reject: Function
}

export function * forgotPassword ({
  data,
  responseSuccess,
  responseFailure,
  resolve,
  reject
}: TForgotPassword): Generator<Object, void, Object> {
  const { res, err } = yield * API('POST', 'auth/password/reset/', data)

  if (res) {
    yield put(responseSuccess(res))
    resolve()
  } else {
    yield put(responseFailure(err))
    reject(new SubmissionError(err))
  }
}
