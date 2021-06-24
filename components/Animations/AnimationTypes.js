import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export function FadeOut(props) {
  const ref = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };


  useEffect(() => {
    if (props.trigger) {
      startAnimation();
    }
  }, [props.trigger]);

  return (
    <Animated.View style={{ ...props.style, opacity: ref }}>
      {props.children}
    </Animated.View>
  );
}

export function FadeIn(props) {
  const ref = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (props.trigger) {
      startAnimation();
    }
  }, [props.trigger]);

  return (
    <Animated.View style={{ ...props.style, opacity: ref }}>
      {props.children}
    </Animated.View>
  );
}

export function ZoomInFadeOut(props) {
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
    if (props.trigger) {
      Animated.sequence(animationSequence).start(() => {});
    }
  }, [props.trigger]);

  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: ref }] }}>
      {props.children}
    </Animated.View>
  );
}
