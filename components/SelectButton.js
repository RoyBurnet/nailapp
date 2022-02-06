import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Animation from "./Animations/Animations";
import { useFonts } from "expo-font";

export default function SelectButton({
  handleClick,
  isSelected = false,
  id,
  text,
}) {
  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  return (
    <Button
      isSelected={isSelected}
      text={text}
      handleClick={handleClick}
      id={id}
      fadeOut
    />
  );
}

const Button = ({ isSelected, text, handleClick, id, fadeOut }) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={[styles.checkBoxItems, isSelected ? styles.isSelected : null]}
        onPress={() => handleClick(id)}
      >
        <Title text={text} isSelected={isSelected} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const Title = ({ text, isSelected }) => (
  <Text style={[styles.checkBoxTitle, isSelected ? styles.isSelected : null]}>
    {text}
  </Text>
);

const styles = StyleSheet.create({
  checkBoxItems: {
    height: 60,
    margin: 5,
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
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
  checkBoxTitle: {
    fontFamily: "Gilroy-Regular",
    fontSize: wp("5%"),
    color: "#ACC9E8",
    flex: 1,
    textAlign: "center",
  },
  isSelected: {
    backgroundColor: "#ACC9E8",
    color: "#FFF",
  },
});
