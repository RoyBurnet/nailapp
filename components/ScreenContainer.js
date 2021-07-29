import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "expo-font";

export default function ScreenContainer({ children, image, title }) {
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });
  
  return (
    <React.Fragment>
      <View style={styles.screenContainer}>
        <View style={styles.screenImage}>
          <ImageBackground source={image} style={styles.backgroundImage}>
            <Text style={styles.screenTitle}>{title}</Text>
          </ImageBackground>
        </View>
        <View style={styles.listContainer}>{children}</View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
  },
  screenTitle: {
    alignSelf: "flex-end",
    marginBottom: hp("5%"),
    marginLeft: wp("6%"),
    fontFamily: "Gilroy-Bold",
    fontSize: hp("3%"),
    color: "white",
  },
  screenImage: {
    flex: 1,
    backgroundColor: "gray",
  },
  listContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6FCFF",
  },
});
