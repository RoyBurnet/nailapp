import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Darkskin(props) {
  return (
    <Svg
      width={75}
      height={74}
      viewBox="0 0 75 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M74 37c0 19.87-16.329 36-36.5 36S1 56.87 1 37 17.329 1 37.5 1 74 17.13 74 37z"
        fill="#895025"
        stroke="#793B08"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.092 60.861a45.388 45.388 0 01-1.117-10.036c0-22.048 15.773-40.412 36.65-44.424a32.877 32.877 0 00-13.089-2.7C19.32 3.702 4.55 18.472 4.55 36.689c0 9.548 4.058 18.15 10.542 24.173z"
        fill="#fff"
        fillOpacity={0.3}
      />
    </Svg>
  );
}

export default Darkskin