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
    if (props.isSelected) {
      startAnimation(animationValues);
    }
  }, [props.isSelected]);

  return (
    <Animated.View style={{ ...props.style, opacity: animationValues.ref }}>
      {props.children}
    </Animated.View>
  );
}

function FadeIn(props) {
  const fadeIn = useRef(new Animated.Value(0)).current;

  const animationValues = {
    ref: fadeIn,
    value: 1,
    duration: 800,
  };

  useEffect(() => {
    startAnimation(animationValues);
  }, []);

  return (
    <Animated.View style={{ ...props.style, opacity: animationValues.ref }}>
      {props.children}
    </Animated.View>
  );
}

export { FadeOut, FadeIn };
