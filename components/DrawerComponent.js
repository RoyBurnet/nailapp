import { StyleSheet, SafeAreaView, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { DrawerItem } from "@react-navigation/drawer";
import AuthContext from "../context/auth/AuthContext";

import React, { useContext } from "react";
import { useFonts } from "expo-font";

function DrawerComponent(props) {
  const authContext = useContext(AuthContext);
  const { isSignIn, signOut } = authContext;

  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  const handleSignOut = async () => {
    await signOut();
    props.navigation.navigate("Login", { screen: "Login" });
  };
  return (
    <SafeAreaView style={styles.customDrawerContainer}>
      <View style={styles.itemContainer}>
        {isSignIn ? (
          <>
            <DrawerItem
              {...props}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home", { screen: "HomeScreen" });
              }}
              labelStyle={{
                fontFamily: "Gilroy-Bold",
                color: "#ACC9E8",
                fontSize: hp("2.5%"),
              }}
            />
            <DrawerItem
              {...props}
              label="Logout"
              onPress={() => {
                handleSignOut();
              }}
              labelStyle={{
                fontFamily: "Gilroy-Bold",
                color: "#ACC9E8",
                fontSize: hp("2.5%"),
              }}
            />
            <DrawerItem
              {...props}
              label="Playground"
              onPress={() => {
                props.navigation.navigate("Playground", {
                  screen: "Playground",
                });
              }}
              labelStyle={{
                fontFamily: "Gilroy-Bold",
                color: "#ACC9E8",
                fontSize: hp("2.5%"),
              }}
            />
          </>
        ) : (
          <>
            <DrawerItem
              {...props}
              label="SignIn"
              onPress={() => {
                props.navigation.navigate("Login", { screen: "Login" });
              }}
              labelStyle={{
                color: "white",
                fontSize: 16,
              }}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  customDrawerContainer: {
    color: 'purple',
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F7FCFF",
  },
  itemContainer: {
    flex: 1,
    marginTop: hp("5%"),
  },
});

export default DrawerComponent;
