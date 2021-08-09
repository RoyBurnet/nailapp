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

function RenderList({ data, title, pressHandler }) {
  const [listData, setListData] = useState(data);
  const [listDataNextQuestion, setListDataNextQuestion] = useState();
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [hideList, setHideList] = useState(false);
  const [currentStep, setCurrentStep] = useState();
  const [problemTitle, setProblemTitle] = useState("");

  useFonts({
    "Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
  });

  function selectItem(id) {
    listData.filter((data) => {
      if (data.id === id) {
        data.isSelected = true;
        setNextStep(data);
        setHideList(true);
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
      setShowFollowUp(true);
      setProblemTitle(data.nextQuestion);
      setCurrentStep(2);
    } else {
      pressHandler([data.standardAdvice]);
      setCurrentStep(1);
    }
  }

  function selectFollowUpItem(id) {
    pressHandler([listDataNextQuestion[id]]);
  }

  useFocusEffect(() => {
    currentStep === 1 ? setHideList(false) : null;
  });

  function handleBackClick() {
    setShowFollowUp(false);
    setHideList(false);
  }

  return (
    <View style={styles.screenBackgroundContainer}>
      <React.Fragment>
        {hideList ? null : (
          <Questionaire
            title={title}
            listData={listData}
            selectItem={selectItem}
            fadeOut={true}
          />
        )}
        {showFollowUp ? (
          <View style={styles.nextQuest}>
            <Questionaire
              title={problemTitle}
              listData={listDataNextQuestion}
              selectItem={selectFollowUpItem}
              fadeOut={false}
            />
            <TouchableOpacity
              onPress={handleBackClick}
              style={styles.vorigeBtnContainer}
            >
              <Text style={styles.vorigeBtnText}>Terug</Text>
            </TouchableOpacity>
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
