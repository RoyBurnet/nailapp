import React, { useState, forwardRef, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

import Questionaire from "./Questionaire";
import Animation from "./Animations/Animations";

import { useFonts } from "expo-font";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function RenderList({ data, title, pressHandler }) {
  const [listData, setListData] = useState(data);
  const [listDataNextQuestion, setListDataNextQuestion] = useState();
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [hideList, setHideList] = useState(false);
  const [currentStep, setCurrentStep] = useState();
  const [problemTitle, setProblemTitle] = useState("");
  const [firstListAnimation, setFirstListAnimation] = useState(false);
  const [secondListAnimation, setSecondListAnimation] = useState(false);

  useFonts({
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
        setFirstListAnimation(true);
        setTimeout(() => {
          setNextStep(data);
          setHideList(true);
        }, 800);
      }
      setListData((items) => [...items]);
    });
  }

  React.useEffect(() => {
    listData.map((item) => {
      item.isSelected = false;
    });
  }, [listData]);

  function setNextStep(data) {
    if (data.hasAdditionalQuestions) {
      setListDataNextQuestion(data.followUpQuestion);
      setProblemTitle(data.nextQuestion);
      setCurrentStep(2);
      setShowFollowUp(true);
    } else {
      pressHandler([data.standardAdvice]);
      setCurrentStep(1);
    }
  }

  function selectFollowUpItem(id) {
    pressHandler([listDataNextQuestion[id]]);
  }

  useFocusEffect(() => {
    if (currentStep === 1) {
      setHideList(false);
      setFirstListAnimation(false);
    }
    if (currentStep === 2) {
      setSecondListAnimation(false);
    }
  });

  function handleBackClick() {
    setShowFollowUp(false);
    setHideList(false);
    setFirstListAnimation(false);
  }

  return (
    <View style={styles.screenBackgroundContainer}>
      <React.Fragment>
        {hideList ? null : (
          <Animation
            animationType={"FadeOut"}
            trigger={firstListAnimation}
            value={1}
          >
            <Questionaire
              title={title}
              listData={listData}
              selectItem={selectItem}
              fadeOut={true}
            />
          </Animation>
        )}
        {showFollowUp ? (
          <View style={styles.nextQuest}>
            <Animation
              animationType={"FadeOut"}
              trigger={secondListAnimation}
              value={1}
            >
              <Questionaire
                title={problemTitle}
                listData={listDataNextQuestion}
                selectItem={selectFollowUpItem}
                fadeOut={true}
              />
              <TouchableOpacity
                onPress={handleBackClick}
                style={styles.vorigeBtnContainer}
              >
                <Text style={styles.vorigeBtnText}>Terug</Text>
              </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  vorigeBtnText: {
    fontFamily: "Gilroy-Regular",
    color: "#ACC9E8",
  },
});
