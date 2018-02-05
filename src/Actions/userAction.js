import * as types from './actionTypes';

export const login = (email, password) => {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email,
      password
    }
  };
};

export const forgotPassword = (email) => {
  return {
    type: types.PASSWORD_REQUEST,
    payload: {
      email
    }
  };
};
