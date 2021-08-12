import React, { useReducer } from "react";
import AnimateContext from "./AnimateContext";
import AnimateReducer from "./AnimateReducer";

import { FADE_IN, FADE_OUT, ZOOM_IN_FADE_OUT } from "../types";

const AnimateState = (props) => {
  const initialState = {
    hasFinishedFadeIn: false,
    hasFinishedFadeOut: false,
    hadFinishedZoomInFadeOut: false,
  };

  const [state, dispatch] = useReducer(AnimateReducer, initialState);

  const setFadeInStatus = async (hasStopped) => {
    dispatch({
      type: FADE_IN,
      payload: flag,
    });
  };

  const setFadeOutStatus = async (hasStopped) => {
    let flag = await hasStopped;
    dispatch({
      type: FADE_OUT,
      payload: flag,
    });
  };

  const setZoomInFadeOutStatus = (hasStopped) => {
    dispatch({
      type: ZOOM_IN_FADE_OUT,
      payload: hasStopped,
    });
  };

  return (
    <AnimateContext.Provider
      value={{
        hasFinishedZoomInFadeOut: state.hasFinishedZoomInFadeOut,
        hasFinishedFadeIn: state.hasFinishedFadeIn,
        hasFinishedFadeOut: state.hasFinishedFadeOut,
        setFadeInStatus,
        setFadeOutStatus,
        setZoomInFadeOutStatus,
      }}
    >
      {props.children}
    </AnimateContext.Provider>
  );
};

export default AnimateState;
