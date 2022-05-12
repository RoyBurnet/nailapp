import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import images from "../src/images";
import DarkSkin from "../src/hands/skintones/Darkskin";
import Europe from "../src/hands/skintones/Europe";
import EastAsia from "../src/hands/skintones/EastAsia";
import LightSkin from "../src/hands/skintones/LightSkin";

const componentMapping = {
  "Dark skin": DarkSkin,
  "Light skin": LightSkin,
  "Europe ": Europe,
  "East Asia": EastAsia,
};

const Color = ({
  item,
  index,
  handleColorPress,
  handleSkinColorPress,
  isSkinColor,
}) => {
  const _item = item - 5;
  const skinColorName = Object.keys(item);
  const Component = componentMapping[skinColorName];

  const hasChosenColor = (colorName) => {
    if (isSkinColor === true) {
      handleSkinColorPress(colorName);
    } else {
      handleColorPress(_item);
    }
  };

  return (
    <>
      {isSkinColor ? (
        <SkinColor hasChosenColor={hasChosenColor} />
      ) : (
        <TouchableOpacity key={index} onPress={hasChosenColor}>
          <Image style={styles.palletStyle} source={item} />
        </TouchableOpacity>
      )}
    </>
  );
};

const SkinColor = ({ hasChosenColor }) => {
  function updateColor(color) {
    hasChosenColor(color);
  }
  return (
    <View style={styles.skinColorPalletContainer}>
      <TouchableOpacity
        onPress={() => {
          updateColor("Dark skin");
        }}
      >
        <DarkSkin style={styles.palletStyleSkin} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateColor("Light skin")}>
        <LightSkin style={styles.palletStyleSkin} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateColor("Europe ")}>
        <Europe style={styles.palletStyleSkin} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateColor("East Asia")}>
        <EastAsia style={styles.palletStyleSkin} />
      </TouchableOpacity>
    </View>
  );
};

export default function ColorPalette({
  handleColorPress,
  searchBar,
  colors,
  isSkinColor,
  handleSkinColorPress,
}) {
  const [pallets, setPallets] = useState([]);
  const [filterValue, setFilterValue] = useState(0);
  const [hasPickedColor, setHasPickedColor] = useState(false);

  const updateNumberValue = (value) => {
    const val = Number.parseInt(value);

    if (filterValue === 0) {
      setPallets(images);
    }
    if (Number.isNaN(val)) {
      setPallets(images);
      setHasPickedColor(true);
    } else if (val > 200) {
      setFilterValue(200);
      setHasPickedColor(true);
    } else {
      setFilterValue(val);
      setHasPickedColor(true);
    }
  };

  useLayoutEffect(() => {
    colors === undefined ? setPallets(images) : setPallets(colors);
  }, [pallets]);

  useLayoutEffect(() => {
    if (hasPickedColor) {
      setPallets([images[filterValue - 1]]);
    } else if (!hasPickedColor) {
      return;
    }
  }, [filterValue, hasPickedColor]);

  return (
    <ScrollView
      style={
        isSkinColor
          ? styles.colorPalletContainerSkin
          : styles.colorPalletContainer
      }
    >
      <View style={styles.colorPalletView}>
        {searchBar ? <SearchBar /> : null}
        {pallets.map((item, index) => (
          <Color
            key={index}
            item={item}
            index={index}
            handleColorPress={handleColorPress}
            handleSkinColorPress={handleSkinColorPress}
            hasPickedColor={hasPickedColor}
            isSkinColor={isSkinColor}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        styles={styles.input}
        keyboardType="numeric"
        placeholder={"voer nummer in "}
        maxLength={3}
        numeric
        value={0}
        onChangeText={(value) => updateNumberValue(Number.parseInt(value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  palletStyle: {
    width: wp("20%"),
    height: hp("10%"),
    resizeMode: "contain",
    flexDirection: "row",
  },
  wink: {
    position: "absolute",
    top: hp("4%"),
    left: wp("5%"),
  },
  colorPalletContainer: {
    alignSelf: "center",
    maxHeight: hp("30%"),
  },
  colorPalletContainerSkin: {
    maxHeight: hp("10%"),
  },
  colorPalletView: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  searchBar: {
    width: wp("80%"),
    height: hp("5%"),
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    zIndex: 9999,
  },
  skinColorPalletContainer: {
    // width: wp("100%"),
    height: hp("10%"),
    display: "flex",
    flexDirection: "row",
  },
  palletStyleSkin: {
    width: wp("10%"),
    height: hp("10%"),
    marginLeft: wp("1%"),
    marginRight: wp("1%"),
    marginTop: hp("1%"),
    resizeMode: "contain",
    flexDirection: "column",
    position: "relative",
  },
  hidden: {
    display: "none",
  },
});
