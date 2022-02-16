import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function LightSkin(props) {
  return (
    <Svg
      width={74}
      height={74}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={37}
        cy={37}
        r={36}
        fill="#BC8F66"
        stroke="#AC7443"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.53 60.861a45.388 45.388 0 01-1.116-10.036c0-22.048 15.773-40.412 36.65-44.424a32.877 32.877 0 00-13.089-2.7c-18.218 0-32.986 14.77-32.986 32.987 0 9.548 4.057 18.15 10.542 24.173z"
        fill="#fff"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default LightSkin;
