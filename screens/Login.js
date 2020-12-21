import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Login({ navigation }) {
  const authContext = useContext(AuthContext);
  const { loginUser, showLoginText } = authContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [email, password]);
  const emptyState = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = () => {
    if (!email) {
      Alert.alert("Email field is required.");
      return;
    }
    if (!password) {
      Alert.alert("Password field is required.");
      return;
    }

    loginUser(email.toLowerCase(), password);
    emptyState();
    navigation.navigate("Loading");
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/start-scherm-backgound.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginHeader}>
            <Image
              style={styles.logo}
              source={require("../src/images/HeromeLogo.png")}
            />
            <Text style={styles.headerText}>
              Jouw persoonlijke hand & nageladvies
            </Text>
          </View>
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
                />
              </View>
            </View>

            <View style={[styles.passwordTextFieldContainer]}>
              <Image
                style={styles.inputLogo}
                source={require("../src/images/lock.png")}
              />
              <View>
                <TextInput
                  style={styles.textField}
                  placeholder="Wachtwoord"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleSignIn()}
          >
            <Text style={styles.buttonText}>Inloggen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.darkblue]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>Account Aanmaken</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lostPassword}
            onPress={() =>
              navigation.navigate("ResetPassword")
            }
          >
            <Text style={styles.lostPasswordText}>Wachtwoord vergeten?</Text>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>Inloggen via Social Media</Text>
            <View style={styles.decoration}>
              <View style={styles.decorationLine} />
              <View style={styles.decorationDot} />
              <View style={styles.decorationLine} />
            </View>
            <View style={styles.socialButtonsContainer}>
              <View style={styles.socialButtons}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Home", { screen: "HomeScreen" })
                  }
                >
                  <Image source={require("../src/images/facebook-icon.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Home", { screen: "HomeScreen" })
                  }
                >
                  <Image source={require("../src/images/twitter-icon.png")} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.noRegister}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              {showLoginText ? (
                <Text style={styles.noRegisterText}>
                  U heeft zich zojuist of al eens reeds eerder successvol
                  geregistreerd. U kunt nu inloggen met uw email en wachtwoord.
                </Text>
              ) : (
                <></>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  loginContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%"),
    height: hp("90%"),
    ...Platform.select({
      ios: {
        marginTop: hp("3%"),
      },
      android: {
        marginTop: hp("1%"),
      },
    }),
  },
  loginHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: wp("3.9%"),
    marginTop: hp("1%"),
    width: wp('80%'),
    textAlign: 'center'
  },
  logo: {
    resizeMode: "contain",
    // width: wp("80%"),
    height: hp('17%')
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
  passwordTextFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#FFF",
    marginTop: 20,
    height: 60,
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
    marginTop: 10,
    width: wp("82%"),
    height: 50,
  },
  lostPassword: {
    marginTop: 20,
    marginBottom: 10,
  },
  lostPasswordText: {
    color: "#fff",
  },
  socialContainer: {
    height: 150,
    width: wp("82%"),
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  darkblue: {
    backgroundColor: "rgb(13, 46, 104)",
  },
  socialText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "white",
  },
  decoration: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  decorationLine: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: wp("38%"),
  },
  decorationDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: "white",
    position: "absolute",
    left: wp("40.5%"),
    top: hp("-0.3%"),
  },
  socialButtonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp("30%"),
    resizeMode: "contain",
  },
  noRegisterText: {
    color: "#fff",
    fontSize: 12,
    justifyContent: "center",
    marginLeft: wp("8%"),
    marginRight: wp("8%"),
    backgroundColor: "#6EBAD9",
    padding: 10,
    borderWidth: 3,
    borderColor: "green",
  },
});
