import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Europe(props) {
  return (
    <Svg
      width={75}
      height={75}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={37.5}
        cy={37.5}
        r={36.5}
        fill="#F6BD90"
        stroke="#EDAF7E"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.092 61.3a45.389 45.389 0 01-1.117-10.037c0-22.048 15.773-40.412 36.65-44.424A32.877 32.877 0 0037.537 4.14C19.32 4.14 4.55 18.91 4.55 37.127c0 9.55 4.058 18.15 10.542 24.174z"
        fill="#fff"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default Europe;
