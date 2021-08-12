import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(name, email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      name,
    });
  } catch (error) {
    Alert.alert("There is something wrong!!!!", error.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    Alert.alert("There is something wrong!", error.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    Alert.alert("There is something wrong!", error.message);
  }
}


// Web client ID

// 804661520551 - mem5q91cnnjdog3poqpffv22i22jdbvo.apps.googleusercontent.com;

// Web client secret
// fPqRSNzrDupgr477nNzAEOqE