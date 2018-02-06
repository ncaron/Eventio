import * as types from '../Actions/actionTypes';
import cloneState from '../Helpers/cloneState';

const initialState = {
  signupError: '',
  loggedIn: false,
  loginError: false,
  passwordSent: false,
  passwordResetError: false,
  currentUser: {
    uid: null,
    email: null
  }
};

const userReducer = (state = initialState, action) => {
  let newState = cloneState(state);

  switch(action.type) {
    case types.SIGNUP_FAILURE: {
      newState.signupError = action.error.message;

      return newState;
    }

    case types.LOGIN_SUCCESS: {
      const user = action.loginResult || action.signupResult;

      newState.currentUser.uid = user.uid;
      newState.currentUser.email = user.email;
      newState.loggedIn = true;
      newState.loginError = false;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      newState.loginError = true;

      return newState;
    }

    case types.PASSWORD_SUCCESS: {
      newState.passwordSent = true;
      newState.passwordResetError = false;

      return newState;
    }

    case types.PASSWORD_FAILURE: {
      newState.passwordSent = false;
      newState.passwordResetError = true;

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
