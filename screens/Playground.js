import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";

import { handen, quest } from "../src/questionaireData";

import React from "react";
import { Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as firebase from "firebase";
import "firebase/firestore";

WebBrowser.maybeCompleteAuthSession();

function Playground() {
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
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return <Button title="Login" onPress={() => promptAsync()}></Button>;
}

export default Playground;
