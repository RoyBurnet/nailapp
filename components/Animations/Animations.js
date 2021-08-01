import React from "react";
import { ZoomInFadeOut, FadeOut, FadeIn, FadeIn2} from "./AnimationTypes";

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
      <Component {...props}>{props.children}</Component>
    </React.Fragment>
  );
}

