import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as firebase from "firebase";
import "firebase/firestore";

WebBrowser.maybeCompleteAuthSession({
  options: {},
});

function TwitterLogin({ socialSignIn }) {
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
        let userToken = await profile?.user?.uid;
        socialSignIn(userToken);
      })();
    }
  }, [response]);

  return (
    <View style={styles.socialButton}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <Image source={require("../src/images/facebookLogo.png")} />
      </TouchableOpacity>
    </View>
  );
}

export default TwitterLogin;

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
