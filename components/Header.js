import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

const ShowBackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.back}
      onPress={() => navigation.goBack(null)}
    >
      <Image
        style={styles.backButton}
        source={require("../src/images/backbutton.png")}
      />
    </TouchableOpacity>
  );
};

const HideBackButton = () => {
  return <TouchableOpacity style={styles.back}></TouchableOpacity>;
};

export default function Header(props) {
  const { hideBackButton } = props;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          {hideBackButton ? (
            <HideBackButton navigation={navigation} />
          ) : (
            <ShowBackButton navigation={navigation} />
          )}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../src/images/logo-white.png")}
            />
          </View>

          <TouchableOpacity
            style={styles.burger}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={styles.navigationBtn}
              source={require("../src/images/Navigation-hamburger.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: wp("95%"),
    marginTop: hp("2%"),
    alignSelf: "center",
    flexDirection: "column",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    height: hp("10%"),
    width: wp("95%"),
    marginTop: hp("5%"),
  },
  logo: {
    maxWidth: wp("30%"),
    height: hp("15%"),
    resizeMode: "contain",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("50%"),
    ...Platform.select({
      ios: {
        marginTop: hp("5%"),
      },
    }),
  },
  line: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    ...Platform.select({
      ios: {
        marginTop: hp("5%"),
      },
    }),
  },
  back: {
    justifyContent: "center",
    alignItems: "center",
    height: hp("5%"),
    width: wp("5%"),
  },
  burger: {
    width: wp("5%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
  },
  navigationBtn: {
    width: wp("5%"),
    resizeMode: "contain",
  },
});
