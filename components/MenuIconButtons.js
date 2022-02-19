import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const IconSkinType = require("../src/images/Skintype-icon.png");
const IconNailLength = require("../src/images/nail-length-icon.png");
const IconNailShape = require("../src/images/nail-shape-icon.png");
const IconNailColor = require("../src/images/nail-color-icon.png");

export default function MenuIconButtons() {
  return (
    <View style={styles.container}>
      <Image source={IconSkinType}></Image>
      <Image source={IconNailLength}></Image>
      <Image source={IconNailShape}></Image>
      <Image source={IconNailColor}></Image>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: 'row',
    height: hp('10%'),
    width: wp('90%'),
    justifyContent: 'space-between',
    alignContent: 'center',
   }
})
