import React from "react";
import { StyleSheet, View } from "react-native";

import Questionaire from "./Questionaire";
import { FadeOut } from "./Animations";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title }) {
  const [listData, setListData] = React.useState(data);
  const [triggerFadeOut, setTriggerFadeOut] = React.useState(false);

  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
        setTriggerFadeOut(true);
      }
    });
    setListData((items) => [...items]);
  }

  React.useEffect(() => {
    listData.map((data) => (data.isSelected = false));
  }, [listData]);

  return (
    <View style={styles.flatListContainer}>
      <FadeOut triggerFadeOut={triggerFadeOut}>
        <Questionaire
          title={title}
          listData={listData}
          selectItem={selectItem}
        />
      </FadeOut>
    </View>
  );
}

export default RenderList;

const styles = StyleSheet.create({
  flatListContainer: {
    top: hp("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
