import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from '../Actions/actionTypes';
import { login, forgotPassword } from '../api';

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

function* passwordSaga({payload}) {
  try {
    const passwordResult = yield call(forgotPassword, payload);

    if (passwordResult && passwordResult.code) {
      throw new Error;
    }

    yield put({ type: types.PASSWORD_SUCCESS });
  } catch(error) {
    yield put({ type: types.PASSWORD_FAILURE });
  }
}

export default function* userWatch() {
  yield [
    takeLatest(types.LOGIN_REQUEST, loginSaga),
    takeLatest(types.PASSWORD_REQUEST, passwordSaga)
  ];
}
