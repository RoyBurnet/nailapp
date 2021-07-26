import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as WebBrowser from "expo-web-browser";
import products from "../src/products";

export default function AdviceComponent(data) {
  const followUpAdvice = data?.data[0]?.advice;
  const standardAvice = data?.data?.standardAdvice?.advice;
  const followUpProducts = data?.data[0]?.products;
  const standardProducts = data?.data?.standardAdvice?.products;
  const url = data?.data[0]?.url;
  const urlStandardAdvice = "https://www.herome.com/";

  const displayAdvice = followUpAdvice || standardAvice;
  const productUrl = url || urlStandardAdvice;
  const productsItems = followUpProducts || standardProducts;

  const handleOpenBrowser = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
    setResult(result);
  };

  const ProductTile = ({ item, url, index }) => {
    return (
      <View style={styles.product} key={index}>
        <TouchableOpacity onPress={() => handleOpenBrowser(url)}>
          <View>
            <ImageBackground
              source={products[item]}
              style={styles.productImage}
            >
              <View
                style={{
                  flex: 1,
                  flexShrink: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <Text style={styles.productName}>{item}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const mapProducts = productsItems?.map((item, index) => (
    <ProductTile item={item} url={productUrl} index={index} key={index} />
  ));

  return (
    <React.Fragment>
      <View style={styles.adviceTextContainer}>
        <Text style={[styles.adviceText, styles.title]}>Ons Advies</Text>
        <Text style={styles.adviceText}>{displayAdvice}</Text>
      </View>
      <Animated.ScrollView>{mapProducts}</Animated.ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    bottom: hp("80%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("10%"),
  },
  product: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp("90%"),
    height: wp("60%"),
    margin: wp("2%"),
    borderRadius: 10,
    backgroundColor: "#9EC9E9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  productImage: {
    width: wp("25%"),
    height: hp("25%"),
    resizeMode: "cover",
  },
  productName: {
    color: "#FFF",
    left: wp("-25%"),
    fontSize: 25,
    width: wp("40%"),
  },
  adviceTextContainer: {
    height: hp("10%"),
    marginTop: hp("15%"),
    width: wp("90%"),
    justifyContent: "center",
    margin: wp("5%"),
    padding: 10,
  },
  adviceText: {
    color: "#ACC9E8",
    fontSize: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
});
