import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

function startAnimation({ ref, value, animationDuration }) {
  Animated.timing(ref, {
    toValue: value,
    duration: animationDuration,
    useNativeDriver: false,
  }).start();
}

function FadeOut(props) {
  const fadeOut = useRef(new Animated.Value(1)).current;

  const animationValues = {
    ref: fadeOut,
    value: 0,
    animationDuration: 800,
  };

  useEffect(() => {
    if (props.hideList) {
      startAnimation(animationValues);
    }
  }, [props.hideList]);

  return (
    <Animated.View style={{ ...props.style, opacity: animationValues.ref }}>
      {props.children}
    </Animated.View>
  );
}

function ZoomInFadeOut(props) {
  const value = useRef(new Animated.Value(1)).current;

  const animationSequence = [
    Animated.timing(value, {
      toValue: 1.05,
      duration: 100,
      useNativeDriver: false,
    }),
    Animated.timing(value, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }),
    Animated.timing(value, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }),
  ];

  useEffect(() => {
    if (props.isSelected) {
      Animated.sequence(animationSequence).start();
    }
  }, [props.isSelected]);

  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: value }] }}>
      {props.children}
    </Animated.View>
  );
}

export { FadeOut, ZoomInFadeOut };
