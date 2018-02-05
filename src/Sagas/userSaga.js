import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from '../Actions/actionTypes';
import { login } from '../api';

function* loginSaga({payload}) {
  try {
    const loginResult = yield call(login, payload);

    if (loginResult.code) {
      throw new Error;
    }

    yield put({ type: types.LOGIN_SUCCESS, loginResult });
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE });
  }
}

export default function* userWatch() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
