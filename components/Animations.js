import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

function FadeOut(props) {
  const ref = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (props.triggerFadeOut) {
      startAnimation();
    }
  }, [props.triggerFadeOut]);

  return (
    <Animated.View style={{ ...props.style, opacity: ref }}>
      {props.children}
    </Animated.View>
  );
}

function FadeIn(props) {
  const ref = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {

  },[])

  return (
    <Animated.View style={{ ...props.style, opacity: ref }}>
      {props.children}
    </Animated.View>
  );
}

function ZoomInFadeOut(props) {
  const ref = useRef(new Animated.Value(1)).current;

  const animationSequence = [
    Animated.timing(ref, {
      toValue: 1.05,
      duration: 100,
      useNativeDriver: false,
    }),
    Animated.timing(ref, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }),
    Animated.timing(ref, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }),
  ];

  useEffect(() => {
    if (props.isSelected) {
      Animated.sequence(animationSequence).start();
    }
  }, [props.isSelected]);

  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: ref }] }}>
      {props.children}
    </Animated.View>
  );
}

export { FadeOut, FadeIn, ZoomInFadeOut };
