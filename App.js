import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import * as GoogleSignIn from "expo-google-sign-in";


import AuthState from "./context/auth/AuthState";
import AnimateState from "./context/animate/AnimateState"

import * as firebase from "firebase";
import apiKeys from "./config/keys";

import { LogBox } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// LogBox.ignoreAllLogs();
// LogBox.ignoreLogs(["Native splash screen is already hidden."]);
const App = () => {

  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
  });
  
  if (!fontsLoaded) return <AppLoading />;
  return (
    <>
      <StatusBar hidden />
      <AuthState>
        <AnimateState>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </AnimateState>
      </AuthState>
    </>
  );
};

export default App;
