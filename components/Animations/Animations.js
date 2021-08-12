import React from "react";
import AnimateState from '../../context/animate/AnimateState'
import { ZoomInFadeOut, FadeOut, FadeIn, FadeIn2 } from "./AnimationTypes";

export default function Animation(props) {
  
  const componentMapping = {
    FadeIn,
    FadeIn2,
    FadeOut,
    ZoomInFadeOut,
  };

  const Component = componentMapping[props.animationType];

  return (
    <React.Fragment>
      <AnimateState>
        <Component {...props}>{props.children}</Component>
      </AnimateState>
    </React.Fragment>
  );
}

