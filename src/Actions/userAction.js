import * as types from './actionTypes';

export const signup = ({firstName, lastName, email, password}) => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: {
      firstName,
      lastName,
      email,
      password
    }
  };
};

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
