import { put, takeLatest, call } from 'redux-saga/effects';

import * as types from '../Actions/actionTypes';
import { signup, login, forgotPassword } from '../api';

function* signupSaga({payload}) {
  try {
    const signupResult = yield call(signup, payload);

    if (signupResult.code == 'auth/email-already-in-use') {
      throw new Error('email');
    } else if (signup.code) {
      throw new Error;
    }

    yield put({ type: types.LOGIN_SUCCESS, signupResult });
  } catch(error) {
    yield put({ type: types.SIGNUP_FAILURE, error });
  }
}

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
    takeLatest(types.SIGNUP_REQUEST, signupSaga),
    takeLatest(types.LOGIN_REQUEST, loginSaga),
    takeLatest(types.PASSWORD_REQUEST, passwordSaga)
  ];
}
