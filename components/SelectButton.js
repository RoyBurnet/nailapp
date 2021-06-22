import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  Image
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {ZoomInFadeOut} from './Animations'

export default function SelectButton({ handleClick, isSelected = false, id, text }) {

  return (
    <React.Fragment>
      <ZoomInFadeOut isSelected={isSelected}>
        <Button
          isSelected={isSelected}
          text={text}
          handleClick={handleClick}
          id={id}
        />
      </ZoomInFadeOut>
    </React.Fragment>
  );
}

const Button = ({ isSelected, text, handleClick, id }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkBoxItems, isSelected ? styles.isSelected : null]}
        onPress={() => handleClick(id)}
      >
        <CheckBox showMark={isSelected} />
        <Title text={text} />
      </TouchableOpacity>
    </View>
  );
};

const CheckBox = ({ showMark }) => {
  return (
    <View style={styles.checkBox}>
      {showMark ? (
        <Image
          source={require("../src/images/check-mark-md.png")}
          style={styles.checkMark}
        />
      ) : null}
    </View>
  );
};

const Title = ({ text }) => <Text style={styles.checkBoxTitle}>{text}</Text>;

const styles = StyleSheet.create({
  checkBox: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginRight: 20,
  },
  checkBoxItems: {
    height: 70,
    width: wp("85%"),
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    backgroundColor: "rgba(13, 46, 104, 0.8)",
    // eslint-disable-next-line no-undef
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  checkMark: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -5,
    left: 10,
  },
  checkBoxTitle: {
    fontSize: wp("5%"),
    fontWeight: "300",
    color: "#fff",
  },
  isSelected: {
    backgroundColor: "#6EBAD9",
  },
});
