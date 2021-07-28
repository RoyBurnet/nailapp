import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Questionaire from "./Questionaire";
import Animation from "./Animations/Animations";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title, additionalQuestions, pressHandler }) {
  const [listData, setListData] = useState(data);
  const [additionQuestion, setAdditionQuestion] = useState(additionalQuestions);
  const [followUpQuestion, setFollowUpQuestion] = useState();
  const [adviceData, setAdviceData] = useState(data);
  const [triggerFadeOut, setTriggerFadeOut] = useState(false);
  const [triggerAdvice, setTriggerAdvice] = useState(false);
  const [triggerFadeIn, setTriggerFadeIn] = useState(false);
  const [hasFollowUp, setHasFollowUp] = useState(false);
  const [renderAdvice, setRenderAdvice] = useState(false);
  const [problemTitle, setProblemTitle] = useState("");

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
      setFollowUpQuestion(data.followUpQuestion);
      setTriggerFadeIn(true);
      setProblemTitle(data.nextQuestion);
      setTimeout(() => {
        setHasFollowUp(true);
      }, 500);
    } else {
      setAdviceData(data);
      setRenderAdvice(true);
    }
  }

  function selectFollowUp(id) {
    additionQuestion.filter((question) => {
      if (question.id === id) {
        question.isSelected = true;
        setTriggerAdvice(true);
        setRenderAdvice(true);
      }
      fillAdivce(id);
    });
    setAdditionQuestion((items) => [...items]);
  }

  function fillAdivce(id) {
    followUpQuestion.map((question) => {
      let item = [];
      if (question.id === id) {
        item.push(question);
        setAdviceData(item);
      }
    });
  }

  React.useEffect(() => {
    listData.map((data) => (data.isSelected = false));
    additionQuestion.map((data) => (data.isSelected = false));
    renderAdvice ? pressHandler(adviceData) : null;
  }, [listData, additionQuestion]);

  return (
    <View style={styles.screenBackgroundContainer}>
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
              <Animation trigger={triggerAdvice} animationType={"FadeOut"}>
                <Questionaire
                  title={problemTitle}
                  listData={additionQuestion}
                  selectItem={selectFollowUp}
                />
              </Animation>
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
  advice: {
    position: "absolute",
    top: hp("90%"),
  },
  productContainer: {
    bottom: hp("80%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("10%"),
  },
  screenBackgroundContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("0%"),
    alignItems: "center",
  },
});
