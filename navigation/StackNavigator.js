import Home from "../screens/Home";
import NagelsQuestionaire from "../screens/NagelsQuestionaire";
import HandenQuestionaire from "../screens/HandenQuestionaire";
import NagelreimenQuestionaire from "../screens/NagelreimenQuestionaire";
import NagellakPicker from "../screens/NagellakPicker";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Loading from "../screens/Loading";
import ResetPassword from "../screens/ResetPassword";
import Playground from "../screens/Playground";
import AdviesScreen from "../screens/AdviesScreen";
import ProductScreen from "../screens/ProductScreen";
import NagellakSubMenuScreen from "../screens/NagellakSubMenuScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/Header";

import React, { useContext, useEffect } from "react";
import { Platform } from "react-native";
import AuthContext from "../context/auth/AuthContext";

const HomeStack = createStackNavigator();

const customHeader = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerLeft: null,
  headerTitle: () => <Header hideBackButton={false} />,
};

const smallLogoHeader = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerLeft: null,
  headerTitle: () => (
    <Header hideBackButton={false} alternativeLogo={true} white={true} />
  ),
};

const adviesSchermHeader = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerLeft: null,
  headerTitle: () => (
    <Header hideBackButton={false} alternativeLogo={true} white={false} />
  ),
};

const hideBackButton = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerLeft: () => null,
  headerTitle: () => <Header hideBackButton={true} />,
};

const noHeader = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerLeft: () => null,
  headerTitle: () => null,
};

const HomeStackScreens = () => {
  const authContext = useContext(AuthContext);
  const { isLoading, isSignIn, restoreUser } = authContext;

  useEffect(() => {
    restoreUser();
  }, []);

  const HomeNavigator = (props) => {
    if (Platform.OS == "ios") {
      return <HomeStack.Navigator>{props.children}</HomeStack.Navigator>;
    } else if (Platform.OS == "android") {
      return (
        <HomeStack.Navigator
          detachInactiveScreens={false}
          screenOptions={{ animationEnabled: false }}
        >
          {props.children}
        </HomeStack.Navigator>
      );
    }
  };

  if (isLoading) {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Loading"
          component={Loading}
          options={noHeader}
        />
      </HomeStack.Navigator>
    );
  }
  return (
    <HomeStack.Navigator>
      {isSignIn ? (
        <>
          <HomeStack.Screen
            name="HomeScreen"
            component={Home}
            options={hideBackButton}
          />
          <HomeStack.Screen
            name="NagellakSubMenuScreen"
            component={NagellakSubMenuScreen}
            options={smallLogoHeader}
          />
          <HomeStack.Screen
            name="NagelsQuestionaire"
            component={NagelsQuestionaire}
            options={smallLogoHeader}
          />
          <HomeStack.Screen
            name="HandenQuestionaire"
            component={HandenQuestionaire}
            options={smallLogoHeader}
          />
          <HomeStack.Screen
            name="NagelreimenQuestionaire"
            component={NagelreimenQuestionaire}
            options={smallLogoHeader}
          />
          <HomeStack.Screen
            name="NagellakPicker"
            component={NagellakPicker}
            options={adviesSchermHeader}
          />
          <HomeStack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={customHeader}
          />
          <HomeStack.Screen
            name="Playground"
            component={Playground}
            options={customHeader}
          />
          <HomeStack.Screen
            name="AdviesScreen"
            component={AdviesScreen}
            options={adviesSchermHeader}
          />
          <HomeStack.Screen
            name="ProductScreen"
            component={ProductScreen}
            options={smallLogoHeader}
          />
        </>
      ) : (
        <>
          <HomeStack.Screen name="Login" component={Login} options={noHeader} />
          <HomeStack.Screen
            name="Register"
            component={Register}
            options={noHeader}
          />
          <HomeStack.Screen
            name="Loading"
            component={Loading}
            options={noHeader}
          />
          <HomeStack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={noHeader}
          />
        </>
      )}
    </HomeStack.Navigator>
  );
};

const HomeScreenNavigation = () => {
  return <HomeStackScreens />;
};

export { HomeScreenNavigation };
