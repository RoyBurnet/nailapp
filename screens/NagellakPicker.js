import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import FastImage from "react-native-fast-image";
import images from "../src/images.js";
import { getNailType } from "../src/nailShapes.js";
import NailColorContainer from "../components/HandPicker";

const IconSkinType = require("../src/images/Skintype-icon.png");
const IconNailLength = require("../src/images/nail-length-icon.png");
const IconNailShape = require("../src/images/nail-shape-icon.png");
const IconNailColor = require("../src/images/nail-color-icon.png");

export default function NagellakPicker() {
  const [currentMenu, setCurrentMenu] = useState();
  const [skinColor, setCurrentSkinColor] = useState();
  const [nailLength, setCurrentNailLength] = useState("Kort");
  const [nailShape, setCurrentNailShape] = useState("Basic");
  const [nailColor, setCurrentNailColor] = useState();
  const [selectedNail, setSelectedNail] = useState({});
  const [submenuItems, setSubmenuItems] = useState([
    {
      id: 0,
      icon: [IconSkinType],
      description: "Selecteer de juiste skintone.",
      showMenu: false,
      options: ["Dark skin", "Light skin", "Europe ", "East Asia"],
      selectedOption: [],
    },
    {
      id: 1,
      icon: [IconNailLength],
      description: "Selecteer de juiste nagel lengte.",
      showMenu: false,
      options: ["Kort", "Middel", "Lang"],
      selectedOption: [],
    },
    {
      id: 2,
      icon: [IconNailShape],
      description: "Selecteer de juiste nagel type.",
      showMenu: false,
      options: ["Basic", "Mountain Peak", "Rounded", "Square", "Almond"],
      selectedOption: [],
    },
    {
      id: 3,
      icon: [IconNailColor],
      description: "Selecteer hieronder de juiste kleur.",
      showMenu: false,
      options: images,
      selectedOption: [],
    },
  ]);

  const setShowMenuToFalse = () => {
    currentMenu === undefined ? null : (currentMenu[0].showMenu = false);
  };

  const handleButtonPress = (id) => {
    setShowMenuToFalse();
    const selectedMenu = submenuItems.filter((item) => {
      return item.id === id;
    });
    selectedMenu[0].showMenu = true;

    setCurrentMenu(selectedMenu);
  };

  const handleColorPress = (index) => {
    setCurrentNailColor(index - 1);
    setShowMenuToFalse();
    setCurrentMenu(undefined);
  };

  const handleSubItemPress = (item, category) => {
    if (category === 0) setCurrentSkinColor(item);
    if (category === 1) setCurrentNailLength(item);
    if (category === 2) setCurrentNailShape(item);

    setShowMenuToFalse();
    setCurrentMenu(undefined);
  };

  useEffect(() => {
    setSelectedNail(getNailType(nailShape, nailLength));
  }, [nailLength, nailShape, nailColor]);

  const MenuButtonContainer = () => {
    return (
      <View style={styles.menuContainer}>
        {submenuItems.map((item) => {
          return (
            <MenuButton
              key={item.id}
              icon={item.icon[0]}
              showPointer={item.showMenu}
              id={item.id}
            />
          );
        })}
      </View>
    );
  };

  const MenuButton = (props) => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress(props.id);
          }}
        >
          <Image style={styles.icons} source={props.icon} />
        </TouchableOpacity>
        {props.showPointer ? <View style={styles.pointer} /> : null}
      </View>
    );
  };

  const SubMenuItem = ({ item, index, category }) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => handleSubItemPress(item, category)}
        >
          <Text style={styles.subMenuItems}>{`${item}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const TextItems = () => {
    return (
      <>
        {currentMenu[0].options.map((item, index) => (
          <View key={index} style={styles.submenuItemContainer}>
            <SubMenuItem
              item={item}
              index={index}
              key={item}
              category={currentMenu[0].id}
            />
            <View
              style={
                index === currentMenu[0].options.length - 1
                  ? [styles.noLine]
                  : [styles.line]
              }
            />
          </View>
        ))}
      </>
    );
  };

  const ColorPalletItems = () => {
    return (
      <ScrollView style={styles.colorPalletContainer}>
        <View style={styles.colorPalletView}>
          {currentMenu[0].options.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleColorPress(index + 1)}
              >
                <Image style={styles.palletStyle} source={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const SubMenu = () => {
    return (
      <>
        {currentMenu !== undefined ? (
          <View style={styles.subMenu}>
            <View style={styles.subMenuTitleContainer}>
              <Text style={styles.subMenuTitle}>
                {currentMenu[0].description}
              </Text>
            </View>
            {currentMenu[0].id === 3 ? (
              <View style={styles.palletInsideView}>
                <ColorPalletItems key={currentMenu[0].id} />
              </View>
            ) : (
              <TextItems />
            )}
          </View>
        ) : null}
      </>
    );
  };

  const ScreenTitle = () => {
    return (
      <>
        <Text style={styles.titleText}>
          Welkom bij de nagellak colorpicker.{"\n"} Maak hieronder uw keuze
        </Text>
      </>
    );
  };

  return (
    <>
      <ImageBackground
        source={require("../src/images/nail-background.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <ScreenTitle />
          <MenuButtonContainer />
          <SubMenu />
          <NailColorContainer
            skinColor={skinColor}
            data={selectedNail}
            color={nailColor}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("16%"),
    alignItems: "center",
  },
  titleText: {
    top: hp("5%"),
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp("90%"),
    marginTop: hp("10%"),
    height: 80,
  },
  subMenu: {
    flexDirection: "column",
    marginTop: 20,
    maxHeight: 400,
    width: wp("85%"),
    paddingBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 2,
    alignItems: "center",
    zIndex: 2,

    ...Platform.select({
      android: {
        elevation: 1,
      },
    }),
  },
  subMenuTitleContainer: {
    marginTop: 10,
    borderRadius: 2,
    backgroundColor: "#3F608D",
    height: 45,
    width: wp("80%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subMenuTitle: {
    fontSize: 17,
    color: "#fff",
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pointer: {
    position: "absolute",
    top: 85,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(255, 255, 255, 0.9)",
  },
  subMenuItems: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#0D2B6C",
  },
  itemContainer: {
    alignSelf: "flex-start",
  },
  line: {
    borderBottomColor: "#0D2B6C",
    borderBottomWidth: 0.5,
    width: wp("75%"),
    marginLeft: 20,
  },
  noLine: {
    display: "none",
  },
  submenuItemContainer: {
    alignSelf: "flex-start",
  },
  colorPalletContainer: {
    alignSelf: "center",
    maxHeight: hp("30%"),
  },
  colorPalletView: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  palletInsideView: {
    maxWidth: wp("90%"),
  },
  palletStyle: {
    width: wp("20%"),
    height: hp("10%"),
    resizeMode: "contain",
    flexDirection: "row",
  },
  icons: {
    width: wp("15%"),
    resizeMode: "contain",
  },
});
