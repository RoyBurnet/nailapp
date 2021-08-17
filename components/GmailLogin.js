import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import AuthContext from "../context/auth/AuthContext";
import * as firebase from "firebase";
import "firebase/firestore";

WebBrowser.maybeCompleteAuthSession({
  options: {},
});

function GmailLogin({ socialSignIn }) {
  const authContext = React.useContext(AuthContext);
  const { setUserToken } = authContext;

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "804661520551-mem5q91cnnjdog3poqpffv22i22jdbvo.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        response.params.access_token
      );

      (async () => {
        let profile = await firebase.auth().signInWithCredential(credential);
        let uid = await profile?.user?.uid;
        setUserToken(uid);
        socialSignIn();
      })();
    }
  }, [response]);

  return (
    <View style={styles.socialButton}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <Image source={require("../src/images/googleLogo.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default GmailLogin;

const styles = StyleSheet.create({
  socialButton: {
    height: hp("5%"),
    width: wp("10%"),
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
});
