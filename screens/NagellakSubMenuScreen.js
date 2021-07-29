import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import { StyleSheet, View, Text } from "react-native";
import SelectButton from "../components/SelectButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const imageNagellak = require("../src/images/nagellakthumbail.png");
const route = "NagellakPicker";

export default function NagellakSubMenuScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate({ name: route });
  };
  return (
    <ScreenContainer image={imageNagellak} title="Nagellak">
      <View style={styles.listContainer}>
        <SelectButton handleClick={pressHandler} text="Colourpicker" />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1.5,
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6fcff",
  },
});
