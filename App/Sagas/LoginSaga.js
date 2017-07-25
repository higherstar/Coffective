// @flow

import { put } from 'redux-saga/effects'
import API from '../Sagas/ApiSaga'
import { SubmissionError } from 'redux-form'

type TLogin = {
  authData: Object,
  responseSuccess: Function,
  responseFailure: Function,
  resolve: Function,
  reject: Function
}

export function * login ({
  authData,
  responseSuccess,
  responseFailure,
  resolve,
  reject
}: TLogin): Generator<Object, void, Object> {
  const { res, err } = yield * API('POST', 'auth/signin/', authData)
  if (res) {
    yield put(responseSuccess(res))
    resolve()
  } else {
    yield put(responseFailure(err))
    reject(new SubmissionError(err))
  }
}
