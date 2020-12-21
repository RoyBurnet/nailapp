import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function NextQuestion({navigation}) {
  const dataFromRoute = navigation.state.params.data;
  const [questions, setQuestions] = useState(dataFromRoute);
  const [followUp, hasFollowUp] = useState(false);
  const [mark, setCheckMark] = useState(false);
  const [nextQuestion, setNextQuestion] = useState('');

  const handleBTNPress = (answer) => {
    let newQuestions = questions.map((item) => {
      item.answers = [answer];
      item.selected = true;
      return item;
    });
    newQuestions[0].selected = true;
    newQuestions[0].answers.length > 1 ? hasFollowUp(true) : hasFollowUp(false);
    setQuestions(newQuestions);
    setCheckMark(true);
  };

  const goToNextPage = (data) => {
    navigation.navigate('NextQuestion', {data: data});
  };

  const goToAdviesPage = (data) => {
    navigation.navigate('Advies', {data: data});
  };

  useEffect(() => {}, [questions]);

  const CheckBoxItems = () => {
    return questions[0].answers.map((question, index) => (
      <View
        key={index}
        style={[
          styles.checkBoxItems,
          mark ? styles.isSelected : styles.notSelected,
        ]}>
        <TouchableOpacity onPress={() => handleBTNPress(question)}>
          <View style={styles.checkBox}>
            {mark ? (
              <Image
                source={require('../src/images/check-mark-md.png')}
                style={styles.checkMark}
              />
            ) : null}
          </View>
        </TouchableOpacity>
        <Text style={styles.checkBoxTitle}>{question}</Text>
      </View>
    ));
  };

  return (
    <>
      <ImageBackground
        source={require('../src/images/nail-background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.screenBackgroundContainer}>
          <Text style={styles.titleText}>{questions[0].additionQuestions}</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.questionContainer}>
            <CheckBoxItems />
          </ScrollView>
          {followUp ? (
            <View style={styles.nextTitle}>
              <Text style={styles.nextQuestion}>Volgende vraag</Text>
              <TouchableOpacity onPress={() => goToNextPage(questions)}>
                <Image
                  style={styles.arrow}
                  source={require('../src/images/nextbtn.png')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {mark && !followUp ? (
            <View style={styles.nextTitle}>
              <Text style={styles.nextQuestion}>Ga naar advies</Text>
              <TouchableOpacity onPress={() => goToAdviesPage(questions)}>
                <Image
                  style={styles.arrow}
                  source={require('../src/images/nextbtn.png')}
                />
              </TouchableOpacity>
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
    width: wp("90%"),
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
    marginTop: hp("20%"),
    marginBottom: hp("5%"),
  },
  checkBoxTitle: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
  titleText: {
    position: "absolute",
    top: hp("10%"),
    color: "#fff",
    fontSize: 20,
  },
  nextQuestion: {
    color: "#fff",
    fontSize: 20,
  },
  arrow: {
    marginLeft: 30,
    // eslint-disable-next-line no-undef
    ...Platform.select({
      ios: {
        marginTop: 8,
      },
      android: {
        marginTop: 10,
      },
    }),
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
  backgroundImage: { flex: 1 },
});
