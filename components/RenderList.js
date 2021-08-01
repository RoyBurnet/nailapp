import React, { useState, forwardRef } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

import Questionaire from "./Questionaire";
import Animation from "./Animations/Animations";
import { useFonts } from "expo-font";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title, additionalQuestions, pressHandler }) {
  const [listData, setListData] = useState(data);
  const [additionQuestion, setAdditionQuestion] = useState(additionalQuestions);
  const [followUpQuestion, setFollowUpQuestion] = useState();
  const [adviceData, setAdviceData] = useState(data);
  const [hideList, setHideList] = useState(false)
  const [firstQuestionFadeOut, setFirstQuestionFadeOut] = useState(false);
  const [firstQuestionFadeIn, setFirstQuestionFadeIn] = useState(false);
  const [followUpQuestionFadeOut, setFollowUpQuestionFadeOut] = useState(false);
  const [followUpQuestionFadeIn, setFollowUpQuestionFadeIn] = useState(false);
  const [firstQuestionFadeIn2, setFirstQuestionFadeIn2] = useState(false);
  const [hasFollowUp, setHasFollowUp] = useState(false);
  const [renderAdvice, setRenderAdvice] = useState(false);
  const [problemTitle, setProblemTitle] = useState("");

  const isFocused = useIsFocused();

  useFonts({
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
        setFirstQuestionFadeOut(true);
        nextStep(data)
      }
      setListData((items) => [...items]);
    });
  }

  function nextStep(data) {
    if (data.hasAdditionalQuestions) {
      setFollowUpQuestion(data.followUpQuestion);
      setFollowUpQuestionFadeIn(true);
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
        setFollowUpQuestionFadeOut(true);
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

  function resetFirstQuestions() {
    listData.map((item) => {
      item.isSelected = false;
    });
    setListData((items) => [...items]);
  }

  function handleBackButtonClick() {
    resetFirstQuestions();
    setFollowUpQuestionFadeOut(true);
    setFirstQuestionFadeIn(true);
  }

  React.useEffect(() => {
    console.log("effect triggerd");
    renderAdvice ? pressHandler(adviceData) : null;
    listData.map((data) => (data.isSelected = false));
  }, [listData, renderAdvice]);

  // React.useEffect(() => {
  //   listData.map((data) => (data.isSelected = false));
  //   additionQuestion.map((data) => (data.isSelected = false));
  //   renderAdvice ? pressHandler(adviceData) : null;
  // }, [listData, additionQuestion, renderAdvice]);


  useFocusEffect(() => {
    listData.map((data) => (data.isSelected = false));
  });

  return (
    <View style={styles.screenBackgroundContainer}>
      <React.Fragment>
        <Animation
          trigger={firstQuestionFadeOut}
          animationType={"FadeOut"}
          value={1}
        >
          <Animation
            trigger={firstQuestionFadeIn}
            animationType={"FadeIn2"}
            value={1}
          >
        <Questionaire
          title={title}
          listData={listData}
          selectItem={selectItem}
        />
        </Animation>
        </Animation>

        {hasFollowUp ? (
          <View style={styles.nextQuest}>
            <Animation
              trigger={followUpQuestionFadeIn}
              animationType={"FadeIn"}
              value={0}
            >
              <Animation
                trigger={followUpQuestionFadeOut}
                animationType={"FadeOut"}
                value={1}
              >
                <Questionaire
                  title={problemTitle}
                  listData={additionQuestion}
                  selectItem={selectFollowUp}
                />
                <TouchableOpacity
                  onPress={handleBackButtonClick}
                  style={styles.vorigeBtnContainer}
                >
                  <Text style={styles.vorigeBtnText}>Terug</Text>
                </TouchableOpacity>
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
  vorigeBtnContainer: {
    flex: 1,
    width: wp("85%"),
    justifyContent: "center",
    alignItems: "center",
  },
  vorigeBtnText: {
    fontFamily: "Gilroy-Regular",
    color: "#ACC9E8",
  },
});
