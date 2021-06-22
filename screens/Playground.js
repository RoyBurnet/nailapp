import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import { View, ImageBackground, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenContainer from "../components/ScreenContainer";

import SelectButton from "../components/SelectButton";

export default function Playground({ navigation }) {
  const [isSelected, setSelected] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    setSelected(true);
  };

  return (
    <ScreenContainer>
      <SelectButton
        id={1}
        text="text"
        handleClick={(id) => handleClick(id)}
        isSelected={isSelected}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
