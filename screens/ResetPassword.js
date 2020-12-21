import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ResetPassword({ navigation }) {
  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {}, [email, password, name]);
  const emptyState = () => {
    setEmail("");
  };

  const handleRegistration = () => {
 
    navigation.navigate("Login");
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.inputFields}>
            <View style={styles.emailTextFieldContainer}>
              <Image
                style={styles.inputLogo}
                source={require("../src/images/mail.png")}
              />
              <View>
                <TextInput
                  style={styles.textField}
                  placeholder="E-mail"
                  placeholderTextColor="white"
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleRegistration()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancelContainer}
            onPress={() => handleRegistration()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    position: "absolute",
    top: hp("10%"),
    color: "#fff",
    fontSize: 20,
  },
  screenBackgroundContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("10%"),
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  browser: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputFields: {
    marginTop: hp("3%"),
    width: wp("82%"),
    flexDirection: "column",
  },
  emailTextFieldContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFF",
  },
  textField: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#FFF",
  },
  inputLogo: {
    width: 20,
    resizeMode: "contain",
    marginRight: 10,
    padding: 0,
    ...Platform.select({
      ios: {
        marginTop: -10,
      },
    }),
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6EBAD9",
    marginTop: 30,
    width: wp("82%"),
    height: 50,
  },
  buttonCancelContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6496F",
    marginTop: 30,
    width: wp("82%"),
    height: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
