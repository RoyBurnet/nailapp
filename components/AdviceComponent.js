import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import product from "../src/products";

export default function AdviceComponent({ data, pressHandler }) {
  const followUpAdvice = data[0]?.advice;
  const standardAvice = data?.standardAdvice?.advice;
  const followUpProducts = data[0]?.products;
  const standardProducts = data?.standardAdvice?.products;

  const displayAdvice = followUpAdvice || standardAvice;
  const productsItems = followUpProducts || standardProducts;

  const navigateToProductScreen = (item) => pressHandler(item);

  const ProductTile = ({ item, index }) => {
    let [fontsLoaded] = useFonts({
      "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
      "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
    });

    return (
      <View style={styles.product} key={index}>
        <TouchableOpacity onPress={() => navigateToProductScreen(item)}>
          <View>
            <ImageBackground source={item.image} style={styles.productImage}>
              <View style={styles.productText}>
                <Text style={styles.productName}>{item.productName}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const mapProducts = productsItems?.map((i) =>
    product.map((item) => {
      if (i === item.productName) {
        return (
          <ProductTile
            item={item}
            url={item.url}
            index={item.id}
            key={item.id}
          />
        );
      }
    })
  );

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
    alignContent: 'center',
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
    fontFamily: "Gilroy-Bold",
    fontSize: hp("3%"),
    width: wp("50%"),
    marginTop: wp("30%"),
  },
  productPrice: {
    fontFamily: "Gilroy-Bold",
    color: "#FFF",
    left: wp("40%"),
    fontSize: hp("2.5%"),
  },
  productText: {
    flex: 1,
    flexShrink: 1,
    flexDirection: "column",
  },
  adviceTextContainer: {
    height: "auto",
    marginTop: hp("15%"),
    width: wp("90%"),
    justifyContent: "center",
    margin: wp("5%"),
    padding: 10,
  },
  adviceText: {
    fontFamily: "Gilroy-Bold",
    color: "#ACC9E8",
    fontSize: hp("2%"),
  },
  title: {
    marginBottom: 10,
    fontSize: hp("3%"),
  },
});
