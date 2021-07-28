import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ProductScreen({ route }) {
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  const { image, info, name, price } = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F0C4D3", "#D597AC"]}
        style={styles.background}
      />
      <ImageBackground source={image} style={styles.imageContainer} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textName]}>{name}</Text>
        <Text style={[styles.text, styles.textPrice]}>{price}</Text>
        <Text style={[styles.text, styles.textInfo]}>{info}</Text>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={[styles.text, styles.textBtn]}>Koop dit product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F6FCFF",
    marginTop: hp("0%"),
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
  imageContainer: {
    width: wp("90%"),
    height: hp("50"),
    marginTop: wp("-80%"),
  },
  textContainer: {
    width: wp("90%"),
    height: hp("50%"),
    position: "absolute",
    top: hp("45%"),
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    fontFamily: "Gilroy-Bold",
  },
  textName: {
    fontSize: hp("3.5%"),
  },
  textPrice: {
    fontSize: hp("3%"),
    marginBottom: hp("1%"),
  },
  textInfo: {
    fontFamily: "Gilroy-Regular",
    marginTop: hp("1%"),
    fontSize: hp("2%"),
  },
  textBtn: {
    fontSize: hp("2.5%"),
  },
  buyBtn: {
    marginTop: hp("5%"),
    height: 60,
    width: wp("85%"),
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "#F8B6CD",
    // eslint-disable-next-line no-undef
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
