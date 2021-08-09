import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "expo-font";

import SelectButton from "./SelectButton";

function Questionaire({ title, listData, selectItem, fadeOut }) {
  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  return (
    <React.Fragment>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <SelectButton
            id={item.id}
            text={item.typeProblem}
            handleClick={(id) => selectItem(id)}
            isSelected={item.isSelected}
            fadOut
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        extraData={listData}
        style={styles.listContainer}
      />
    </React.Fragment>
  );
}

export default Questionaire;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    marginTop: hp("10%"),
    marginBottom: hp("5%"),
  },
  listTitle: {
    top: hp("5%"),
    textAlign: "center",
    color: "#ACC9E8",
    fontFamily: "Gilroy-Bold",
    fontSize: hp("2.5%"),
  },
});
