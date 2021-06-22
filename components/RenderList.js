import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import SelectButton from "./SelectButton";
import {FadeOut} from './Animations'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title }) {
  const [listData, setListData] = React.useState(data);
  
  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
      }
    });
    setListData((items) => [...items]);
  }

  React.useEffect(() => {
    listData.map((data) => (data.isSelected = false));
  }, [listData]);

  return (
    <View style={styles.flatListContainer}>
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
    </View>
  );
}

export default RenderList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "column",
    marginTop: hp("15%"),
    marginBottom: hp("5%"),
  },
  listTitle: {
    position: "absolute",
    top: hp("10%"),
    color: "#fff",
    fontSize: 20,
  },
  flatListContainer: {
    top: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
