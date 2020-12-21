import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const imageNagels = require('../src/images/nagels.jpg');
const imageNagelRiemen = require('../src/images/nagelriem.jpg');
const imageNagelLak = require('../src/images/nagellak.png');
const imageHanden = require('../src/images/handen.png');

const Tile = ({pressHandler, title, route, image}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(route)}>
      <View style={styles.tile}>
        <ImageBackground source={image} style={styles.imageTile}>
          <View style={styles.overlay} />
          <Text style={styles.category}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const AdviesTiles = ({pressHandler}) => {
  return (
    <View style={styles.viewAdvies}>
      <View style={styles.container}>
        <Tile
          title="nagels"
          image={imageNagels}
          pressHandler={pressHandler}
          route="NagelsQuestionaire"
        />
        <Tile
          title="nagelriemen"
          image={imageNagelRiemen}
          pressHandler={pressHandler}
          route="NagelreimenQuestionaire"
        />
        <Tile
          title="handen"
          image={imageHanden}
          pressHandler={pressHandler}
          route="HandenQuestionaire"
        />
        <Tile
          title="nagellak"
          image={imageNagelLak}
          pressHandler={pressHandler}
          route="NagellakPicker"
        />
      </View>
    </View>
  );
};

export default function Home({navigation}) {
  const pressHandler = (route) => {
    navigation.navigate(route);
  };
  return (
    <>
      <ImageBackground
        source={require('../src/images/start-scherm-backgound.jpg')}
        style={styles.image}>
        <View style={styles.homeContainer}>
          <Text style={styles.titleText}>
            Met welk advies kunnen wij je helpen
          </Text>
          <AdviesTiles pressHandler={pressHandler} />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  titleText: {
    position: 'absolute',
    top: hp('10%'),
    color: '#fff',
    fontSize: hp('2.3%'),
  },
  container: {
    marginTop: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tile: {
    alignSelf: 'center',
    width: wp('40%'),
    height: wp('50%'),
    margin: wp('2%'),
    borderRadius: 5,
    flexDirection: 'row',
  },
  category: {
    flex: 1,
    alignSelf: 'flex-end',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    textTransform: 'uppercase',
  },
  imageTile: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    marginTop: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAdvies: {flex: 1, alignItems: 'center'},
});
