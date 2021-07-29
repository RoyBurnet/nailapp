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
import { Qlogo, Backbtn, Menubtn, Mainlogo } from "./SvgImages/Icons";

const ShowBackButton = ({ navigation, colors }) => {
  const color = colors ? "#FFF" : "#ACC9E8";
  return (
    <TouchableOpacity
      style={styles.back}
      onPress={() => navigation.goBack(null)}
    >
      <Backbtn color={color} />
    </TouchableOpacity>
  );
};

const HideBackButton = () => {
  return (
    <TouchableOpacity
      style={styles.back}
    ></TouchableOpacity>
  );
};

const BigLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Mainlogo style={styles.logo} />
    </View>
  );
};

const SmallLogo = (props) => {
  const color = props.color ? "#FFF" : "#ACC9E8";
  return (
    <View style={styles.smallLogoContainer}>
      <Qlogo color={color} />
    </View>
  );
};

const MenuButton = (props) => {
  const color = props.color ? "#FFF" : "#ACC9E8";
  return <Menubtn color={color} style={styles.navigationBtn} />;
}

export default function Header(props) {
  const { hideBackButton, alternativeLogo, white } = props;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          {alternativeLogo ? <SmallLogo color={white} /> : <BigLogo />}
          {hideBackButton ? (
            <HideBackButton navigation={navigation} />
          ) : (
            <ShowBackButton navigation={navigation} colors={white} />
          )}

          <TouchableOpacity
            style={styles.burger}
            onPress={() => navigation.openDrawer()}
          >
            <MenuButton  color={white} />
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: wp("95%"),
    marginTop: hp("0%"),
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
    ...Platform.select({
      ios: {
        marginTop: hp("-6%"),
      },
    }),
  },
  logoContainer: {
    justifyContent: "center",
    width: wp("50%"),
    marginLeft: wp("-14%"),
    ...Platform.select({
      ios: {
        marginTop: hp("5%"),
      },
    }),
  },
  smallLogoContainer: {
    justifyContent: "center",
    width: wp("50%"),
    marginLeft: wp("-14%"),
    ...Platform.select({
      ios: {
        marginTop: hp("2%"),
      },
    }),
  },
  back: {
    justifyContent: "center",
    height: hp("5%"),
    width: wp("6%"),
    marginRight: wp("-15"),
  },
  burger: {
    width: wp("5%"),
    height: hp("5%"),
    justifyContent: "center",
    marginRight: wp('-15%'),
  },
  navigationBtn: {
    width: wp("5%"),
    marginRight: wp("-25%"),
    resizeMode: "contain",
  },
});
