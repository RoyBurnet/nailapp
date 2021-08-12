import React, { useRef, useEffect, useState, useContext } from "react";
import { Animated } from "react-native";
import AnimateContext from "../../context/animate/AnimateContext";

export const FadeOut = (props) => {
  console.log(props.trigger)
  const animateContext = useContext(AnimateContext);
  const { hasFinishedFadeOut, setFadeOutStatus } = animateContext;

  const ref = useRef(new Animated.Value(props.value)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
    }).start(() => {
    });
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
};

export function FadeIn(props) {
  const ref = useRef(new Animated.Value(props.value)).current;

  const startAnimation = () => {
    Animated.timing(ref, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start(() => {
    });
  };

  useEffect(() => {
    if (props.trigger) {
      console.log(props.trigger);
      startAnimation();
    }
  }, [props.trigger]);

  return (
    <Animated.View style={{ ...props.style, opacity: ref }}>
      {props.children}
    </Animated.View>
  );
}

export function FadeIn2(props) {
  const ref = useRef(new Animated.Value(props.value)).current;
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

export const ZoomInFadeOut = (props) => {
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
      Animated.sequence(animationSequence).start(() => {
      });
    }
  }, [props.trigger]);

  return (
    <Animated.View style={{ ...props.style, transform: [{ scale: ref }] }}>
      {props.children}
    </Animated.View>
  );
};
