// @flow

import { put } from 'redux-saga/effects'
import API from '../Sagas/ApiSaga'

type TGetUser = {
  responseSuccess: Function,
  responseFailure: Function
}

export function * getUser ({
  responseSuccess,
  responseFailure
}: TGetUser): Generator<Object, void, Object> {
  const { res, err } = yield * API('GET', 'me/')

  if (res) {
    yield put(responseSuccess(res))
  } else {
    yield put(responseFailure(err))
  }
}
