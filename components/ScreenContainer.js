import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

export default function ScreenContainer(props) {

  return (
    <React.Fragment>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>{props.children}</View>
      </ImageBackground>
    </React.Fragment>
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