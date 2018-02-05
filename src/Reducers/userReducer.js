import * as types from '../Actions/actionTypes';
import cloneState from '../Helpers/cloneState';

const initialState = {
  loggedIn: false,
  loginError: false,
  currentUser: {
    uid: null,
    email: null
  }
};

const userReducer = (state = initialState, action) => {
  let newState = cloneState(state);

  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      const user = action.loginResult;

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

    default: {
      return state;
    }
  }
};

export default userReducer;
