import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { handen, quest } from "../src/questionaireData.js";
import products from "../src/products";
import * as WebBrowser from "expo-web-browser";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function NagelsQuestionaire({ navigation }) {
  const [questions, setQuestions] = useState(handen);
  const [followUp, setHasFollowup] = useState(false);
  const [titleNextQuestion, setTitleNextQuestion] = useState();
  const [nextQuestion, setNextQuestion] = useState(quest);
  const [followUpQuestion, setFollowUpQuestion] = useState();
  const [advice, setAdvice] = useState();
  const [showAdvice, setShowAdvice] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [indexToAnimate, setIndexToAnimate] = useState("");
  const [followUpSelected, setFollowUpSelected] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(1)).current;
  const fadeToView = useRef(new Animated.Value(0.01)).current;
  const anotherFade = useRef(new Animated.Value(1)).current;
  const anotherFadeToView = useRef(new Animated.Value(0.01)).current;

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  function fadeToBlack() {
    Animated.timing(fade, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(fadeIn());
  }

  function additionalFadeFunction() {
    Animated.timing(anotherFade, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }

  function fadeIn() {
    Animated.timing(fadeToView, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }

  function fadeIn2() {
    Animated.timing(fadeToView, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }

  function fadeIn3() {
    Animated.timing(anotherFadeToView, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }

  function startAnimation() {
    const animations = [
      Animated.timing(animation, {
        toValue: 1.05,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ];
    Animated.sequence(animations).start(() => {
      fadeToBlack();
    });
  }

  function playAnimationSequence(id) {
    startAnimation();
    setIndexToAnimate(id);
    fadeOut(id);
  }

  function selectItem(id) {
    playAnimationSequence(id);
    questions.filter((question) => {
      if (question.id === id) {
        question.isSelected = true;
        setNextStep(question);
      }
    });
    setQuestions((items) => [...items]);
  }

  function setNextStep(question) {
    if (question.hasAdditionalQuestions) {
      setHasFollowup(true);
      setTitleNextQuestion(question.nextQuestion);
      setFollowUpQuestion(question.followUpQuestion);
    } else {
      setHasFollowup(false);
      setAdvice(question);
      setShowAdvice(true);
      fadeIn2();
    }
  }

  function selectFollowUpItem(id) {
    playAnimationSequence(id);
    return followUpQuestion.map((question) => {
      let item = [];
      if (question.id === id) {
        question.isSelected = true;
        item.push(question);
        setNextQuestion(item);
        setFollowUpSelected(true);
        additionalFadeFunction();
        setAdvice(item);

        setHasFollowup(false);
        setShowAdvice(true);
      }
    });
  }

  useEffect(() => {
    questions.map((question) => (question.isSelected = false));
    nextQuestion.map((question) => (question.isSelected = false));
  }, [questions, nextQuestion, animation, showAdvice]);

  const CheckBoxItem = ({ id, isSelected, onPress, typeProblem }) => {
    return (
      <AnimatedTouchable
        onPress={() => onPress(id)}
        key={id}
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            transform:
              id === indexToAnimate ? [{ scale: animation }] : [{ scale: 1 }],
            opacity: id === indexToAnimate ? 1 : fadeAnim,
          },
          styles.checkBoxItems,
          isSelected ? styles.isSelected : styles.notSelected,
        ]}
      >
        <View style={[styles.checkBox]}>
          {isSelected ? (
            <Image
              source={require("../src/images/check-mark-md.png")}
              style={styles.checkMark}
            />
          ) : null}
        </View>
        <Text style={styles.checkBoxTitle}>{typeProblem}</Text>
      </AnimatedTouchable>
    );
  };

  const RenderQuestions = ({ title, onPress, data }) => {
    return (
      <Animated.View style={[{ opacity: fade }, styles.flatList]}>
        <Text style={styles.titleText}>{title}</Text>
        <Animated.FlatList
          data={data}
          renderItem={({ item }) => (
            <CheckBoxItem
              onPress={onPress}
              title={title}
              id={item.id}
              isSelected={item.isSelected}
              typeProblem={item.typeProblem}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          extraData={data}
          style={styles.questionContainer}
        />
      </Animated.View>
    );
  };

  const RenderAdditonalQuestions = ({ title, onPress, data, info }) => {
    return (
      <Animated.View style={[{ opacity: fadeToView }]}>
        <Animated.Text
          style={[
            styles.nextQuestion,
            // eslint-disable-next-line react-native/no-inline-styles
            { opacity: followUpSelected ? anotherFade : 1 },
          ]}
        >
          {title}
        </Animated.Text>
        <Animated.FlatList
          data={info}
          renderItem={({ item }) => (
            <CheckBoxItem
              onPress={onPress}
              title={title}
              id={item.id}
              isSelected={item.isSelected}
              typeProblem={item.answer}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          extraData={data}
          style={[
            styles.questionContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            { opacity: followUpSelected ? anotherFade : 1 },
          ]}
        />
      </Animated.View>
    );
  };

  const RenderAdvice = (data) => {
    const followUpAdvice = data?.data[0]?.advice;
    const standardAvice = data?.data?.standardAdvice?.advice;
    const displayAdvice = followUpAdvice || standardAvice;

    const followUpProducts = data?.data[0]?.products;
    const url = data?.data[0]?.url;
    const urlStandardAdvice = "https://www.herome.com/";
    const standardProducts = data?.data?.standardAdvice?.products;

    const handleOpenBrowser = async (url) => {
      let result = await WebBrowser.openBrowserAsync(url);
      setResult(result);
    };

    const fProducts = followUpProducts?.map((item, index) => (
      <View key={index}>
        <View style={styles.product}>
          <TouchableOpacity onPress={() => handleOpenBrowser(url)}>
            <View style={{ margin: wp("5%"), height: hp("35%") }}>
              <Image source={products[item]} style={styles.productImage} />
              <Text style={styles.productName}>{item}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    ));

    const sProducts = standardProducts?.map((item, index) => (
      <View style={styles.product} key={index}>
        <TouchableOpacity onPress={() => handleOpenBrowser(urlStandardAdvice)}>
          <View style={{ margin: wp("5%"), height: hp("35%") }}>
            <Image source={products[item]} style={styles.productImage} />
            <Text style={styles.productName}>{item}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));

    const displayProducts = fProducts || sProducts;

    return (
      <Animated.ScrollView style={[{ opacity: fadeToView }]}>
        <Text style={styles.adviceText}>{displayAdvice}</Text>
        {displayProducts}
      </Animated.ScrollView>
    );
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.screenBackgroundContainer}>
          <RenderQuestions
            title="Ik heb last van..."
            onPress={selectItem}
            data={questions}
          />
          {followUp ? (
            <View style={{ bottom: hp("80%") }}>
              <RenderAdditonalQuestions
                data={nextQuestion}
                info={followUpQuestion}
                onPress={selectFollowUpItem}
                title={titleNextQuestion}
              />
            </View>
          ) : null}
          {showAdvice ? (
            <View style={styles.productContainer}>
              <RenderAdvice data={advice} />
            </View>
          ) : null}
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  checkBoxItems: {
    height: 70,
    width: wp("85%"),
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    // eslint-disable-next-line no-undef
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  flatList: {
    justifyContent: "center",
    alignItems: "center",
  },
  isSelected: {
    backgroundColor: "#6EBAD9",
  },
  notSelected: {
    backgroundColor: "rgba(13, 46, 104, 0.8)",
  },
  checkBox: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginRight: 20,
  },
  questionContainer: {
    flexDirection: "column",
    marginTop: hp("15%"),
    marginBottom: hp("5%"),
  },
  checkBoxTitle: {
    fontSize: wp("5%"),
    fontWeight: "300",
    color: "#fff",
  },
  titleText: {
    position: "absolute",
    top: hp("10%"),
    color: "#fff",
    fontSize: 20,
  },
  adviceText: {
    color: "#fff",
    fontSize: 15,
    justifyContent: "center",
    margin: wp("5%"),
    marginLeft: wp("8%"),
    marginRight: wp("8%"),
    backgroundColor: "#6EBAD9",
    padding: 10,
  },
  productContainer: {
    bottom: hp("80%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("10%"),
  },
  product: {
    margin: wp("8%"),
    height: hp("40%"),
    backgroundColor: "#fff",
  },
  productImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  productName: {
    color: "#002b64",
    fontWeight: "bold",
    margin: hp("5%"),
    textAlign: "center",
  },
  nextQuestion: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  arrow: {
    marginTop: 10,
    marginLeft: 30,
  },
  nextTitle: {
    position: "absolute",
    top: hp("40%"),
    left: wp("30%"),
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  checkMark: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -5,
    left: 10,
  },
  screenBackgroundContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("10%"),
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
});
