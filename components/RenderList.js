import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Questionaire from "./Questionaire";
import Animation from "./Animations/Animations";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title, additionalQuestions }) {
  const [listData, setListData] = React.useState(data);
  const [triggerFadeOut, setTriggerFadeOut] = React.useState(false);
  const [triggerFadeIn, setTriggerFadeIn] = React.useState(false);
  const [hasFollowUp, setHasFollowUp] = React.useState(false);
  const [problemTitle, setProblemTitle] = React.useState("hello");

  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
        setTriggerFadeOut(true);
        nextStep(data);
      }
    });
    setListData((items) => [...items]);
  }

  function nextStep(data) {
    if (data.hasAdditionalQuestions) {
      setTriggerFadeIn(true);
      setProblemTitle(data.nextQuestion);
      setTimeout(() => {
        setHasFollowUp(true);
      }, 500);
    }
  }

  React.useEffect(() => {
    listData.map((data) => (data.isSelected = false));
  }, [listData]);

  return (
    <View style={styles.flatListContainer}>
      <React.Fragment>
        <Animation trigger={triggerFadeOut} animationType={"FadeOut"}>
          <Questionaire
            title={title}
            listData={listData}
            selectItem={selectItem}
          />
        </Animation>
        {hasFollowUp ? (
          <View style={styles.nextQuest}>
            <Animation trigger={triggerFadeIn} animationType={"FadeIn"}>
              <Questionaire
                title={problemTitle}
                listData={additionalQuestions}
                selectItem={selectItem}
              />
            </Animation>
          </View>
        ) : null}
      </React.Fragment>
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
  nextQuest: {
    position: "absolute",
    top: hp("0%"),
  },
});
