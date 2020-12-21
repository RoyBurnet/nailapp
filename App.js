import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";

import AuthState from "./context/auth/AuthState";

import * as firebase from "firebase";
import apiKeys from "./config/keys";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <>
      <StatusBar hidden />
      <AuthState>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthState>
    </>
  );
};

export default App;
