import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EastAsia(props) {
  return (
    <Svg
      width={74}
      height={75}
      viewBox="0 0 74 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M73 37.5C73 57.671 56.87 74 37 74S1 57.671 1 37.5 17.13 1 37 1s36 16.329 36 36.5z"
        fill="#FFE3BC"
        stroke="#FCDCAB"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.53 61.3a45.389 45.389 0 01-1.116-10.037c0-22.048 15.773-40.412 36.65-44.424A32.877 32.877 0 0036.975 4.14C18.757 4.14 3.989 18.91 3.989 37.127c0 9.55 4.057 18.15 10.542 24.174z"
        fill="#fff"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default EastAsia;
