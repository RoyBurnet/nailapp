import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

const LoadingIndicatorView = () => {
  return (
    <ActivityIndicator
      color="rgb(13, 46, 104)"
      size="large"
      style={styles.spinner}
    />
  );
};

export default function Advies() {
  return (
    <>
      <ImageBackground
        source={require('../src/images/nail-background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.webviewContainer}>
          <WebView
            style={styles.browser}
            source={{uri: 'https://www.herome.com/'}}
            renderLoading={LoadingIndicatorView}
            startInLoadingState={true}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    position: 'absolute',
    top: hp('10%'),
    color: '#fff',
    fontSize: 20,
  },
  screenBackgroundContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: hp('10%'),
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  browser: {
    flex: 1,
  },
  webviewContainer: {
    marginTop: hp('18%'),
    flex: 1,
  },
  spinner: {
    position: 'absolute',
    top: hp('30%'),
    left: wp('50%'),
  },
});
