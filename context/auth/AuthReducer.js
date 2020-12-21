import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT, REGISTER } from "../types";

export default (state, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
        isSignIn: action.payload === null ? false : true,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        isSignIn: true,
        userToken: action.payload,
        showLoginText: false
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
        isSignIn: false,
        userToken: action.payload,
        showLoginText: false
      };
    case REGISTER:
      return {
        isLoading: false,
        showLoginText: true,
      };
    default:
      return state;
  }
};
