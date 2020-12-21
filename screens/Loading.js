import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Register({ navigation }) {
  const authContext = useContext(AuthContext);
  const { userToken } = authContext;
  useEffect(() => {
    if (userToken) {
      navigation.navigate("Home", { screen: "HomeScreen" });
    } else {
      navigation.navigate("Login", { screen: "Login" });
    }
  });

  return (
    <>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={{ opacity: 1 }}
            color="#999999"
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  screenBackgroundContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("10%"),
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
