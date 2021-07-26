import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SelectButton from "./SelectButton";

function Questionaire({ title, listData, selectItem }) {
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
    marginTop: hp("15%"),
    marginBottom: hp("5%"),
  },
  listTitle: {
    top: hp("10%"),
    textAlign: "center",
    color: "#ACC9E8",
    fontSize: 20,
  },
});
