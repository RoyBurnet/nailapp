import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "expo-font";

export default function ScreenContainer({ children, image, title }) {
  useFonts({
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
    marginBottom: hp("4%"),
    marginLeft: wp("8%"),
    fontFamily: "Gilroy-Bold",
    fontSize: hp("5%"),
    color: "white",
  },
  screenImage: {
    flex: 1,
    backgroundColor: "gray",
  },
  listContainer: {
    flex: 1.5,
    backgroundColor: "#F6FCFF",
  },
});
