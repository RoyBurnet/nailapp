import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import images from "../src/images";

const Color = ({
  item,
  index,
  handleColorPress,
  handleSkinColorPress,
  isSkinColor,
}) => {
  const _item = item - 5;
  const skinColorPallet = Object.values(item);
  const skinColorName = Object.keys(item);

  const hasChosenColor = () => {
    if (isSkinColor === true) {
      handleSkinColorPress(skinColorName[0]);
    } else {
      handleColorPress(_item);
    }
  };

  return (
    <>
      {isSkinColor ? (
        <TouchableOpacity key={index} onPress={hasChosenColor}>
          <Image style={styles.palletStyleSkin} source={skinColorPallet[0]} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity key={index} onPress={hasChosenColor}>
          <Image style={styles.palletStyle} source={item} />
        </TouchableOpacity>
      )}
    </>
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

  const onValueChange = (value) => {
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

  useEffect(() => {
    colors === undefined ? setPallets(images) : setPallets(colors);
  }, [pallets]);

  useEffect(() => {
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
        onChangeText={(value) => onValueChange(Number.parseInt(value))}
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
  palletStyleSkin: {
    width: wp("15%"),
    height: hp("10%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    resizeMode: "contain",
    flexDirection: "row",
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
});
