import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";

import * as SecureStore from "expo-secure-store";
import * as firebase from "firebase";
import { registration, signIn, loggingOut } from "../../API/firebaseMethods";

import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT, REGISTER } from "../types";

const AuthState = (props) => {
  const initialState = {
    userToken: null,
    isLoading: false,
    isSignOut: true,
    isSignIn: false,
    showLoginText: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (name, email, password) => {
    try {
      await registration(name, email, password);
      dispatch({
        type: REGISTER,
      });
    } catch (error) {
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      await signIn(email, password);
      const user = firebase.auth().currentUser.uid;
      await SecureStore.setItemAsync("userToken", user);
      dispatch({
        type: SIGN_IN,
        payload: user,
      });
    } catch (error) {
      throw error;
    }
  };

  const setUserToken = async (userToken) => {
    try {
      await SecureStore.setItemAsync("userToken", userToken);
      dispatch({
        type: SIGN_IN,
        payload: userToken,
      });
    } catch (error) {
      throw error;
    }
  };

  const restoreUser = async () => {
    try {
      const userToken = await SecureStore.getItemAsync("userToken");
      dispatch({
        type: RESTORE_TOKEN,
        payload: userToken,
      });
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      loggingOut();
      await SecureStore.deleteItemAsync("userToken");
      dispatch({
        type: SIGN_OUT,
        payload: null,
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userToken: state.userToken,
        isLoading: state.isLoading,
        isSignOut: state.isSignOut,
        isSignIn: state.isSignIn,
        showLoginText: state.showLoginText,
        register,
        loginUser,
        restoreUser,
        signOut,
        setUserToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
