import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import { View, ImageBackground, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SelectButton from "../components/SelectButton";

export default function Playground({ navigation }) {
  const [isSelected, setSelected] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    setSelected(true);
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <SelectButton
            id={1}
            text="text"
            handleClick={(id) => handleClick(id)}
            isSelected={isSelected}
          />
        </View>
      </ImageBackground>
    </>
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
