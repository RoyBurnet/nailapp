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

const Color = ({ item, index, handleColorPress }) => {
  const _item = item - 25;
  
  return (
    <TouchableOpacity key={index} onPress={() => handleColorPress(_item)}>
      <Image style={styles.palletStyle} source={item} />
    </TouchableOpacity>
  );
};

export default function ColorPalette({ handleColorPress }) {
  const [pallets, setPallets] = useState(images);
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
    if (hasPickedColor) {
      setPallets([images[filterValue - 1]]);
    } else if (!hasPickedColor) {
      return
    }
  }, [filterValue, hasPickedColor]);

  return (
    <ScrollView style={styles.colorPalletContainer}>
      <View style={styles.colorPalletView}>
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
        {pallets.map((item, index) => (
          <Color
            key={index}
            item={item}
            index={index}
            handleColorPress={handleColorPress}
            hasPickedColor={hasPickedColor}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  palletStyle: {
    width: wp("20%"),
    height: hp("10%"),
    resizeMode: "contain",
    flexDirection: "row",
  },
  colorPalletContainer: {
    alignSelf: "center",
    maxHeight: hp("30%"),
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
