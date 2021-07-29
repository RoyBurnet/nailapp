import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const imageNagels = require("../src/images/nagelsthumb.png");
const imageNagelRiemen = require("../src/images/nagelriementhumb.jpeg");
const imageNagelLak = require("../src/images/nagellakthumbail.png");
const imageHanden = require("../src/images/handthumb.png");

const Tile = ({ pressHandler, title, route, image }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(route)}>
      <View style={styles.tile}>
        <ImageBackground source={image} style={styles.imageTile}>
          <Text style={styles.category}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const TitleList = ({ pressHandler }) => {
  const tileItems = [
    {
      id: "1",
      title: "Handen",
      image: imageHanden,
      pressHandler: pressHandler,
      route: "HandenQuestionaire",
    },
    {
      id: "2",
      title: "Nagellak",
      image: imageNagelLak,
      pressHandler: pressHandler,
      route: "NagellakSubMenuScreen",
    },
    {
      id: "3",
      title: "Nagels",
      image: imageNagels,
      pressHandler: pressHandler,
      route: "NagelsQuestionaire",
    },
    {
      id: "4",
      title: "Nagelriemen",
      image: imageNagelRiemen,
      pressHandler: pressHandler,
      route: "NagelreimenQuestionaire",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tileItems}
        renderItem={({ item }) => (
          <Tile
            title={item.title}
            route={item.route}
            image={item.image}
            pressHandler={pressHandler}
            keyExtractor={(item) => item.id}
          />
        )}
      />
    </View>
  );
};

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });

  const pressHandler = (route) => {
    navigation.navigate(route);
  };

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <View style={styles.homeContainer}>
        <TitleList pressHandler={pressHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  titleText: {
    position: "absolute",
    top: hp("10%"),
    color: "#fff",
    fontSize: hp("2.3%"),
  },
  container: {
    marginTop: hp("20%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tile: {
    alignSelf: "center",
    width: wp("90%"),
    height: wp("60%"),
    margin: wp("2%"),
    borderRadius: 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  imageTile: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  category: {
    flex: 1,
    marginBottom: 20,
    fontFamily: "Gilroy-Bold",
    fontSize: hp("3%"),
    color: "#fff",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#F6FCFF",
    marginTop: hp("-5%"),
  },
  viewAdvies: { flex: 1, alignItems: "center" },
});
