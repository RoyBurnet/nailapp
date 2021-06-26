import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Animated,
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
  const displayAdvice = followUpAdvice || standardAvice;

  const followUpProducts = data?.data[0]?.products;
  const standardProducts = data?.data?.standardAdvice?.products;
  const url = data?.data[0]?.url;
  const urlStandardAdvice = "https://www.herome.com/";
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
          <View style={{ margin: wp("5%"), height: hp("35%") }}>
            <Image source={products[item]} style={styles.productImage} />
            <Text style={styles.productName}>{item}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const mapProducts = productsItems?.map((item, index) => (
    <ProductTile item={item} url={productUrl} index={index} />
  ));

  return (
    <Animated.ScrollView>
      <Text style={styles.adviceText}>{displayAdvice}</Text>
      {mapProducts}
    </Animated.ScrollView>
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
    margin: wp("8%"),
    height: hp("40%"),
    backgroundColor: "#fff",
  },
  productImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  productName: {
    color: "#002b64",
    fontWeight: "bold",
    margin: hp("5%"),
    textAlign: "center",
  },
  adviceText: {
    color: "#fff",
    fontSize: 15,
    justifyContent: "center",
    margin: wp("5%"),
    marginLeft: wp("8%"),
    marginRight: wp("8%"),
    backgroundColor: "#6EBAD9",
    padding: 10,
  },
});
