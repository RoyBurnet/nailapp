import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
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
import { useFonts } from "expo-font";
import { ToggleIcon } from "../components/SvgImages/Icons";
import ColorPalette from "../components/ColorPalette";

import DarkSkin from '../src/hands/skintones/Darkskin';
import Europe from '../src/hands/skintones/Europe';
import EastAsia from '../src/hands/skintones/EastAsia';
import LightSkin from '../src/hands/skintones/LightSkin';

const IconSkinType = require("../src/images/Skintype-icon.png");
const IconNailLength = require("../src/images/nail-length-icon.png");
const IconNailShape = require("../src/images/nail-shape-icon.png");
const IconNailColor = require("../src/images/nail-color-icon.png");

export default function NagellakPicker() {
  useFonts({
    "Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
  });
  const [hideOptions, setHideOptions] = useState(false);
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
      options: [
        { "Dark skin": require("../src/skinColors/Ellipse-6.png") },
        { "Light skin": require("../src/skinColors/Ellipse-4.png") },
        { "Europe ": require("../src/skinColors/Ellipse-2.png") },
        { "East Asia": require("../src/skinColors/Ellipse-7.png") },
      ],
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

  const toggleOptions = () => setHideOptions((previousState) => !previousState);

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

  const handleColorPress = (item) => {
    setCurrentNailColor(item);
    setShowMenuToFalse();
    setCurrentMenu(undefined);
  };

  const handleSkinColorPress = (item) => {
    setCurrentSkinColor(item);
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
                <ColorPalette handleColorPress={handleColorPress} searchBar />
              </View>
            ) : currentMenu[0].id === 0 ? (
              <View style={styles.palletInsideView}>
                <ColorPalette
                  handleSkinColorPress={handleSkinColorPress}
                  colors={currentMenu[0].options}
                  isSkinColor={true}
                />
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
      <View style={styles.titleContainer}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Colourpicker</Text>
          <Text style={styles.subtitle}>Maak hieronder uw keuze</Text>
        </View>
        <View style={styles.toggleIcon}>
          <TouchableOpacity onPress={() => toggleOptions()}>
            <ToggleIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ShowMenuContainer = () => {
    return (
      <>
        {hideOptions === false ? (
          <>
            <MenuButtonContainer />
            <SubMenu />
          </>
        ) : null}
      </>
    );
  };

  return (
    <>
      <ImageBackground style={styles.backgroundImage}>
        <View style={styles.container}>
          <ScreenTitle />
          <ShowMenuContainer />
          <NailColorContainer
            isHidden={hideOptions}
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
    backgroundColor: "#002B64",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: hp("16%"),
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    width: wp("85%"),
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: hp("3%"),
    color: "#ACC9E8",
  },
  subtitle: {
    marginTop: hp("1%"),
    fontFamily: "Gilroy-Bold",
    fontSize: hp("2%"),
    color: "#ACC9E8",
  },
  textArea: {
    flexDirection: "column",
  },
  titleText: {
    top: hp("5%"),
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  toggleIcon: {
    justifyContent: "flex-end",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp("90%"),
    marginTop: hp("2%"),
    height: 80,
  },
  subMenu: {
    flexDirection: "column",
    marginTop: 20,
    maxHeight: 400,
    width: wp("85%"),
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
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
    borderRadius: 10,
    backgroundColor: "#ACC9E8",
    height: 45,
    width: wp("80%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subMenuTitle: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "Gilroy-Bold",
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
    borderBottomColor: "#fff",
  },
  subMenuItems: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
    fontFamily: "Gilroy-Bold",
    color: "#ACC9E8",
  },
  itemContainer: {
    alignSelf: "flex-start",
  },
  line: {
    borderBottomColor: "#ACC9E8",
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
  palletInsideView: {
    maxWidth: wp("90%"),
  },
  icons: {
    width: wp("15%"),
    resizeMode: "contain",
  },
});
