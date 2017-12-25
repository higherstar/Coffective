// @flow

import { put } from 'redux-saga/effects'
import API from '../Sagas/ApiSaga'

export function * getCity ({
  zip,
  responseSuccess,
  responseFailure,
}): Generator<Object, void, Object> {
  const { res, err } = yield * API('GET', `https://www.zipcodeapi.com/rest/${'Gz8Wa1uLiyEctVfG8bmMBMgIGrGmORauqjrAkVmDt0QXW5D5hZRSM8BsziPo90SA'}/info.json/${zip}/radians`)
  if (res) {
    yield put(responseSuccess(res))
  } else {
    yield put(responseFailure(err))
  }
}
