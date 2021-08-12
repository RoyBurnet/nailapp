import {
  FADE_IN,
  FADE_OUT,
  ZOOM_IN_FADE_OUT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FADE_IN:
      return {
        ...state,
        isFinishedFadeIn: action.payload,
      };
    case FADE_OUT:
      return {
        ...state,
        isFinishedFadeOut: action.payload,
      };
    case ZOOM_IN_FADE_OUT:
      return {
        ...state,
        isFinishZoomInFadeOut: action.payload,
      };
    default:
      return state;
  }
};
