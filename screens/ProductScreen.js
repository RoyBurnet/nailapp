import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { BottomSheet } from "react-native-btr";
import * as WebBrowser from "expo-web-browser";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ProductScreen({ route }) {
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });
    const [visible, setVisible] = React.useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

    const handleOpenBrowser = async (url) => {
      let result = await WebBrowser.openBrowserAsync(url);
      setResult(result);
    };

  const { image, productName, howTo, effect, url } = route.params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F0C4D3", "#D597AC"]}
        style={styles.background}
      />
      <ImageBackground source={image} style={styles.imageContainer} />
      <View style={styles.textContainer}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.03)", "#D597AC", "#F0C4D3"]}
          style={styles.background}
        />
        <View style={styles.content}>
          <Text style={[styles.text, styles.textName]}>{productName}</Text>
          <Text style={[styles.text, styles.textInfo]}>{effect}</Text>
          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <Text style={[styles.text, styles.textInfo, styles.moreInfo]}>
              + meer info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buyBtn}
            onPress={() => handleOpenBrowser(url)}
          >
            <Text style={[styles.text, styles.textBtn]}>Meer informatie</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ShowMoreModal
        productName={productName}
        howTo={howTo}
        toggleBottomNavigationView={toggleBottomNavigationView}
        visible={visible}
      />
    </View>
  );
}

const ShowMoreModal = ({
  productName,
  howTo,
  toggleBottomNavigationView,
  visible,
}) => {

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggleBottomNavigationView}
      onBackdropPress={toggleBottomNavigationView}
    >
      <View style={styles.bottomContainer}>
        <View style={styles.bottomView}>
          <ScrollView>
            <Text style={[styles.text, styles.textName, styles.infoColor]}>
              {productName}
            </Text>
            <Text style={[styles.text, styles.textInfo, styles.effectInfo]}>
              {howTo}
            </Text>
            <TouchableOpacity
              onPress={toggleBottomNavigationView}
              style={[styles.buyBtn, styles.effectCloseButton]}
            >
              <Text style={[styles.text, styles.textBtn]}>Terug</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F6FCFF",
    marginTop: hp("0%"),
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
  },
  imageContainer: {
    width: wp("90%"),
    height: hp("50"),
    marginTop: wp("-80%"),
  },
  textContainer: {
    width: wp("100%"),
    height: hp("50%"),
    position: "absolute",
    top: hp("50%"),
  },
  text: {
    color: "#FFF",
    fontFamily: "Gilroy-Bold",
    marginLeft: wp("6%"),
    marginRight: wp("6%"),
  },
  textName: {
    fontSize: hp("3.5%"),
  },
  textPrice: {
    fontSize: hp("3%"),
    marginBottom: hp("1%"),
  },
  textInfo: {
    fontFamily: "Gilroy-Regular",
    marginTop: hp("1%"),
    fontSize: hp("2%"),
  },
  moreInfo: {
    fontFamily: "Gilroy-Bold",
    marginTop: hp("2%"),
  },
  effectInfo: {
    color: "#ACC9E8",
    fontSize: hp("2.1%"),
    marginLeft: wp("4%"),
    marginRight: wp("4%"),
    flex: 1,
    justifyContent: "center",
  },
  effectCloseButton: {
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    backgroundColor: "#ACC9E8",
  },
  textBtn: {
    fontSize: hp("2.5%"),
  },
  bottomContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoColor: {
    color: "#ACC9E8",
    textAlign: "center",
    marginTop: hp("2%"),
  },
  content: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
  },
  buyBtn: {
    marginTop: hp("5%"),
    height: 60,
    width: wp("85%"),
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "#F8B6CD",
    marginLeft: wp("6%"),
    marginRight: wp("6%"),
    // eslint-disable-next-line no-undef
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
