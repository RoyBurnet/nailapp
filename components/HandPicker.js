import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  AlmondSmall,
  AlmondMiddle,
  AlmondLarge,
  BasicSmall,
  BasicMiddle,
  BasicLarge,
  MountainPeakSmall,
  MountainPeakMiddle,
  MountainPeakLarge,
  RoundSmall,
  RoundMiddle,
  RoundLarge,
  SquareSmall,
  SquareMiddle,
  SquareLarge,
} from "./SvgColors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { getNailType } from "../src/nailShapes.js";
import nailPolishImages from "../src/polish.js";
import * as WebBrowser from "expo-web-browser";
import { useFonts } from "expo-font";

const componentMapping = {
  "Kort Almond": AlmondSmall,
  "Middel Almond": AlmondMiddle,
  "Lang Almond": AlmondLarge,
  "Kort Basic": BasicSmall,
  "Middel Basic": BasicMiddle,
  "Lang Basic": BasicLarge,
  "Kort Mountain Peak": MountainPeakSmall,
  "Middel Mountain Peak": MountainPeakMiddle,
  "Lang Mountain Peak": MountainPeakLarge,
  "Kort Rounded": RoundSmall,
  "Middel Rounded": RoundMiddle,
  "Lang Rounded": RoundLarge,
  "Kort Square": SquareSmall,
  "Middel Square": SquareMiddle,
  "Lang Square": SquareLarge,
};

const NailColor = (props) => {
  const nailColor = props.color === undefined ? 22 : props.color;
  const nailShape = props?.shape[0];
  const shape =
    nailShape == "undefined undefined" ? "Kort Basic" : props?.shape[0];
  const Component = componentMapping[shape];
  return <Component style={styles.nailColor} color={nailColor} />;
};

const HandImage = ({ image }) => {
  const skinColor = {
    "Dark skin": require("../src/hands/hands2/Dark-hand.png"),
    "Light skin": require("../src/hands/hands2/Light-hand.png"),
    "Europe ": require("../src/hands/hands2/White-hand.png"),
    "East Asia": require("../src/hands/hands2/Asian-hand.png"),
  };

  return (
    <Image
      style={styles.handImage}
      source={skinColor[image] || skinColor["Europe "]}
    />
  );
};

const ShadowImage = ({ image }) => {
  return <Image style={styles.shadowImage} source={image} />;
};

const NailPolishContainer = ({ number }) => {
  const image = nailPolishImages[number];
  return (
    <View style={styles.nailPolishContainer}>
      <Image style={styles.productImage} source={image} />
    </View>
  );
};

const ProdcutTitleContainer = (props) => {
  const colorNumber = props.number + 1;
  const title = `Take Away Nail Colour  ${colorNumber}`;
  return (
    <View style={styles.productTitle}>
      {props.number === undefined ? (
        <></>
      ) : (
        <Text style={styles.productTitleText}>{title}</Text>
      )}
    </View>
  );
};

const BuyNowButton = (props) => {
  const [result, setResult] = useState(null);
  const price = "2.99";
  const productNumber = props.number + 1;
  const url = `https://www.herome.com/product/take-away-nail-colour-${productNumber}`;
  const openBrowser = (url) => Linking.openURL(url);

  const handleOpenBrowser = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
    setResult(result);
  };

  return (
    <>
      {props.number === undefined ? (
        <></>
      ) : (
        <View style={styles.ctaContainer}>
          <Text style={styles.productTitleText}>€ {price}</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => handleOpenBrowser(url)}
          >
            <Text style={styles.productTitleTextButton}>meer informatie</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const CtaContainer = ({ isHidden, nailColor }) => {
  if (isHidden) {
    return <></>;
  } else {
    return (
      <>
        <ProdcutTitleContainer number={nailColor} />
        <NailPolishContainer number={nailColor} />
        <BuyNowButton number={nailColor} />
      </>
    );
  }
};

function NailColorContainer(props) {
  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  const size = props?.data[0]?.size;
  const type = props?.data[0]?.type;
  const nailColor = props.color;
  const skinColor = props?.skinColor;
  const shadow = getNailType(type, size)[0]?.shadow;
  const nailShape = [size + " " + type];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HandImage image={skinColor} />
        <NailColor shape={nailShape} color={nailColor} />
        <ShadowImage image={shadow} />
        <CtaContainer isHidden={props.isHidden} nailColor={nailColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: hp("-55%"),
    width: wp("100%"),
    height: hp("100%"),
  },
  content: {
    flex: 1,
    flexDirection: "row",
    width: wp("100%"),
    position: "relative",
    ...Platform.select({
      android: {
        elevation: 1,
      },
    }),
  },
  paddingView: {
    flex: 1,
    position: "absolute",
    height: hp("10%"),
    width: wp("10%"),
  },
  handImage: {
    position: "absolute",
    width: wp("80%"),
    height: hp("50%"),
    zIndex: -1,
    ...Platform.select({
      android: {
        elevation: -1,
      },
    }),
  },
  shadowImage: {
    position: "absolute",
    width: wp("80%"),
    height: hp("50%"),
    zIndex: 2,
  },
  nailColor: {
    position: "absolute",
    width: wp("112%"),
    height: hp("50%"),
    zIndex: -1,
    top: wp("-0%"),
    left: wp("-16%"),
    zIndex: -1,
    ...Platform.select({
      android: {
        elevation: -1,
      },
    }),
  },
  nailPolishContainer: {
    width: wp("39%"),
    height: hp("35%"),
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: wp("90%"),
    height: hp("40%"),
    resizeMode: "contain",
  },
  productTitle: {
    position: "absolute",
    left: wp("13%"),
    top: hp("-15%"),
  },
  productTitleText: {
    fontSize: hp("3%"),
    fontFamily: "Gilroy-Bold",
    color: "#ACC9E8",
  },
  productTitleTextButton: {
    color: "white",
    fontFamily: "Gilroy-Bold",
    fontSize: hp("2%"),
  },
  ctaContainer: {
    width: wp("79%"),
    height: hp("10%"),
    bottom: hp("-35%"),
    left: wp("11%"),
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: wp("10%"),
    paddingRight: wp("5%"),
    marginRight: wp("5%"),
    marginLeft: wp("5%"),
    zIndex: 99,
  },
  buyButton: {
    backgroundColor: "#ACC9E8",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
    paddingTop: wp("2%"),
    paddingBottom: wp("2%"),
    borderRadius: wp("10%"),
  },
});
export default NailColorContainer;
