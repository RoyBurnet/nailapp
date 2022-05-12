import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/AuthContext";
import GmailLogin from "../components/GmailLogin";
import FBLogin from "../components/FBLogin";
import TwitterLogin from "../components/TwitterLogin";

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

import { useFonts } from "expo-font";
import { Message, Lock } from "../components/SvgImages/Icons";

export default function Login({ navigation }) {
  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });
  const authContext = useContext(AuthContext);
  const { loginUser, showLoginText, setUserToken } = authContext;
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

  const socialSignIn = (userToken) => {
    setUserToken(userToken);
    navigation.navigate("Loading");
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/login-background.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.loginContainer}>
          <View style={styles.loginHeader}>
            <Image
              style={styles.logo}
              source={require("../src/images/HeromeLogo.png")}
            />
            <Text style={styles.headerText}>
              Jouw hand & nageladvies in één app
            </Text>
          </View>
          <Text style={styles.ctaText}>
            {" "}
            Welkom,{"\n"} Meld je aan om verder te gaan{" "}
          </Text>
          <View style={styles.inputFields}>
            <View style={styles.emailTextFieldContainer}>
              <Message style={styles.inputLogo} />
              <View>
                <TextInput
                  style={styles.textField}
                  placeholder="E-mailadres"
                  placeholderTextColor="#ACC9E8"
                  onChangeText={(email) => setEmail(email)}
                />
              </View>
            </View>

            <View style={[styles.passwordTextFieldContainer]}>
              <Lock style={styles.inputLogo} />
              <View>
                <TextInput
                  style={styles.textField}
                  placeholder="Wachtwoord"
                  placeholderTextColor="#ACC9E8"
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
            style={styles.lostPassword}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text style={styles.lostPasswordText}>Wachtwoord vergeten?</Text>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <Text style={styles.socialText}>
              Of meld je aan met Social Media
            </Text>
            <View style={styles.socialButtonsContainer}>
              <View style={styles.socialButton}>
                <GmailLogin socialSignIn={socialSignIn} />
              </View>
              {/* <View style={styles.socialButton}>
                <FBLogin socialSignIn={socialSignIn} />
              </View> */}
              {/* <View style={styles.socialButton}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Home", { screen: "HomeScreen" })
                  }
                >
                  <Image source={require("../src/images/twitterLogo.png")} />
                </TouchableOpacity>
              </View> */}
            </View>
            <View style={styles.noAccountContainer}>
              <View style={styles.register}>
                <Text style={styles.registerText}>Nog geen account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Register", {screen: "Register"})
                  }}
                >
                  <Text style={[styles.registerText, styles.ctaMeld]}>
                    Meld je hier aan.
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.withoutRegisterText}>
                  Doorgaan zonder registreren
                </Text>
              </TouchableOpacity>
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
    marginTop: hp("10%"),
  },
  headerText: {
    color: "white",
    fontSize: wp("5%"),
    marginTop: hp("1%"),
    width: wp("90%"),
    textAlign: "center",
    fontFamily: "Gilroy-Bold",
    top: hp("-8%"),
  },
  logo: {
    resizeMode: "contain",
    top: hp("-8%"),
    height: hp("17%"),
  },
  inputFields: {
    marginTop: hp("3%"),
    width: wp("82%"),
    flexDirection: "column",
  },
  ctaText: {
    fontFamily: "Gilroy-Bold",
    color: "#fff",
    fontSize: wp("5.5%"),
  },
  ctaMeld: {
    fontFamily: "Gilroy-Bold",
  },
  emailTextFieldContainer: {
    flexDirection: "row",
    borderBottomWidth: 0,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: wp("2%"),
    paddingTop: hp("1%"),
  },
  passwordTextFieldContainer: {
    marginTop: 10,
    flexDirection: "row",
    borderBottomWidth: 0,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: wp("2%"),
    paddingTop: hp("1%"),
  },
  textField: {
    width: wp("70%"),
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "#ACC9E8",
    fontFamily: "Gilroy-Bold",
    fontSize: wp("4%"),
    fontWeight: 'bold'
  },
  inputLogo: {
    width: 20,
    resizeMode: "contain",
    marginRight: 10,
    marginTop: -10,
    padding: 0,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8B6CD",
    borderRadius: 10,
    marginTop: 10,
    width: wp("82%"),
    height: 50,
  },
  lostPassword: {
    marginTop: 15,
    marginBottom: 10,
  },
  lostPasswordText: {
    color: "#fff",
    fontFamily: "Gilroy-Regular",
    fontSize: wp("4%"),
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
  socialText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: wp("5%"),
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
  socialButtonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    flexDirection: "row",
  },
  socialButton: {
    height: hp("5%"),
    width: wp("10%"),
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  noAccountContainer: {
    height: hp("10%"),
  },
  register: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    color: "white",
    fontFamily: "Gilroy-Regular",
    fontSize: wp("4.5%"),
  },
  withoutRegisterText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Gilroy-Regular",
    fontSize: wp("4.5%"),
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
