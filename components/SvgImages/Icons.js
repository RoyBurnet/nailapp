import React from "react";
import Svg, { Path, Image, Defs, Pattern, ClipPath, G, Mask } from "react-native-svg";

function Qlogo(props) {
  return (
    <Svg
      width={35}
      height={55}
      viewBox="0 0 35 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.381 18.01c4.645-1.104 6.574-4.012 9.468-7.213.808-.992 3.32-2.096 5.475-2.096.807 0 2.041.293 2.513.924.47.631 5.429-5.32 5.429-9.174.583-.068 2.58 1.15 2.58 1.668s-.314 1.375-.763 1.735v4.554c1.391-.226 4.488-.924 4.488 4.779 0 1.33-.584 3.313 1.727 5.545-.763 1.465-8.75.293-8.75-6.83 0-.925.516-2.502 1.503-3.02l-.628-1.872-4.173 4.013c.404.473 1.055.766 1.055 2.502 0 3.313-5.7 6.65-11.981 6.65-1.212 0-6.91-.857-7.898-2.142v-.023H.381zM17.343 21.64c-5.115 0-9.782 2.344-12.9 6.018C2.018 30.52.56 34.172.56 38.184c0 9.13 7.695 16.478 16.782 16.478s16.984-7.349 16.984-16.478c0-9.129-7.875-16.545-16.984-16.545zm7.56 29.19c-6.057 3.426-14.179.293-17.993-6.605-2.872-5.207-3.477-11.067-.875-15.192.853-1.33 2.02-2.48 3.568-3.359 6.08-3.471 14.493-.293 18.307 6.605 3.814 6.875 3.186 15.034-3.006 18.55z"
        fill={props.color}
      />
    </Svg>
  );
}

function Backbtn(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fillRule="evenodd" clipRule="evenodd" fill={props.color}>
        <Path d="M15 4.375C9.141 4.375 4.375 9.141 4.375 15S9.141 25.625 15 25.625 25.625 20.859 25.625 15 20.859 4.375 15 4.375zM15 27.5C8.107 27.5 2.5 21.892 2.5 15 2.5 8.107 8.107 2.5 15 2.5c6.892 0 12.5 5.607 12.5 12.5 0 6.892-5.608 12.5-12.5 12.5z" />
        <Path d="M16.803 20.276a.933.933 0 01-.661-.274l-4.359-4.337a.939.939 0 010-1.33l4.359-4.338a.936.936 0 111.322 1.329L13.774 15l3.69 3.675a.936.936 0 01-.661 1.6z" />
      </G>
    </Svg>
  );
}

function Menubtn(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3.5 7.583c0-3.062.033-4.083 4.083-4.083s4.084 1.02 4.084 4.083.013 4.084-4.084 4.084c-4.096 0-4.083-1.02-4.083-4.084zM16.333 7.583c0-3.062.033-4.083 4.084-4.083 4.05 0 4.083 1.02 4.083 4.083s.013 4.084-4.083 4.084c-4.097 0-4.084-1.02-4.084-4.084zM3.5 20.417c0-3.063.033-4.084 4.083-4.084s4.084 1.02 4.084 4.084c0 3.062.013 4.083-4.084 4.083-4.096 0-4.083-1.02-4.083-4.083zM16.333 20.417c0-3.063.033-4.084 4.084-4.084 4.05 0 4.083 1.02 4.083 4.084 0 3.062.013 4.083-4.083 4.083-4.097 0-4.084-1.02-4.084-4.083z" />
      </G>
    </Svg>
  );
}

function Mainlogo(props) {
  return (
    <Svg
      width={110}
      height={47}
      viewBox="0 0 110 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M108.388 16.14c0 .834-.323 1.63-.929 2.238a3.158 3.158 0 01-4.476 0 3.157 3.157 0 010-4.476 3.156 3.156 0 014.476 0c.588.588.929 1.384.929 2.238zm-3.167-3.016a3.011 3.011 0 00-3.016 3.016 3.011 3.011 0 003.016 3.015 3.01 3.01 0 003.015-3.015 3.01 3.01 0 00-3.015-3.016z"
        fill="#ACC9E8"
      />
      <Path
        d="M104.728 17.809h-.721v-3.395h1.441c.588 0 1.176.19 1.176.891 0 .436-.284.74-.702.816.569.057.569.398.626.872 0 .209.057.626.19.816h-.816a5.022 5.022 0 01-.094-.91c-.038-.19-.095-.456-.342-.456h-.777v1.366h.019zm0-1.935h.606c.323 0 .513-.17.513-.474 0-.303-.19-.436-.513-.436h-.606v.91zM7.169 41.724h.55v1.024H.512v-1.062l1.859.02v-17.05C2.37 23.29.89 23.44.303 23.44v-.967H7.51v1.005H5.5v4.362h5.747v-3.527c0-.683-1.025-1.024-2.22-1.024v-.797h7.36v.948h-1.954v17.031c0 .778.55 1.233 1.043 1.233H16.5v1.062H9.293v-1.062h1.973V29.207H5.5V40.49c0 .683.93 1.233 1.574 1.233h.095zM22.36 41.705h1.556c4.115-.038 4.19-2.03 4.19-5.177h1.1v7.548h-1.1v-1.347l-3.527.02h-7.207v-1.063l1.859.02v-17.05c0-1.366-1.48-1.215-2.067-1.215v-.967h10.715V21.11h1.081v7.074h-1.08v-2.105c0-1.48-1.86-2.618-3.282-2.618l-2.257.02v4.361h2.257v-2.503h1.328v7.567h-1.233c0-1.48.303-3.641-2.333-3.641v12.441zM48.154 42.236c-1.575 0-5.671-2.408-6.449-3.091 4.666 0 7.814-4.609 7.852-8.478 0-4.703-4.362-8.895-9.028-8.895-1.195 0-2.37.285-3.376.664a10.82 10.82 0 00-1.934.948l.019-1.043h-5.405v.968c1.176 0 2.2.341 2.2 1.024v17.353h-1.954v1.233h8.212v-1.214h-2.01c-.493 0-1.043-.436-1.043-1.233v-2.655l8.572 4.685c1.176.53 3.13.91 4.343.91 1.86 0 2.485-.53 2.466-.967 0-.531-1.593-.209-2.465-.209zM35.959 35.75l-.512.569V25.186c0-.436 1.043-1.062 2.2-1.498.758-.284 1.593-.474 2.218-.474 3.092 0 6.999 2.143 6.98 7.358 0 3.338-.892 7.34-6.012 7.34-.873-.019-3.547-.834-4.874-2.162zM101.579 41.705h1.555c4.116-.038 4.192-2.03 4.192-5.177h1.157v7.548h-1.157v-1.347l-3.528.02h-7.207v-1.063l1.859.02v-17.05c0-1.366-1.48-1.215-2.067-1.215v-1.138h10.715v-1.365h1.081v7.245h-1.081v-2.105c0-1.48-1.858-2.618-3.281-2.618l-2.257.02v4.361h2.257v-2.503h1.157v7.567h-1.043c0-1.48.303-3.641-2.333-3.641v12.441h-.019zM90.295 24.978l-4.514 11.72-4.438-11.057v14.85c0 .683.93 1.233 1.574 1.233l.095.02h.55v1.023h-5.709v-1.062l1.859.02v-17.05c0-1.366-1.48-1.215-2.067-1.215v-1.138h5.48l3.339 8.725 3.224-8.706h5.746v1.1h-1.972v17.031c0 .778.569 1.233 1.043 1.233h1.005v1.062h-7.207v-1.062h1.954V24.883v.095h.038zM50.012 15.153c3.926-.929 5.557-3.375 8.004-6.069.682-.834 2.806-1.763 4.627-1.763.683 0 1.726.246 2.124.777.398.531 4.59-4.476 4.59-7.719.493-.057 2.181.968 2.181 1.404 0 .436-.266 1.157-.645 1.46v3.831c1.176-.19 3.793-.777 3.793 4.02 0 1.12-.493 2.789 1.46 4.666-.644 1.233-7.396.247-7.396-5.746 0-.778.436-2.105 1.27-2.542l-.53-1.574-3.528 3.376c.341.398.891.645.891 2.105 0 2.788-4.817 5.595-10.127 5.595-1.024 0-5.841-.72-6.676-1.802v-.019h-.038z"
        fill="#ACC9E8"
      />
      <Path
        d="M64.35 18.207c-4.324 0-8.269 1.972-10.905 5.064-2.048 2.408-3.281 5.48-3.281 8.857 0 7.68 6.505 13.863 14.186 13.863s14.357-6.182 14.357-13.863c0-7.681-6.657-13.921-14.357-13.921zm6.391 24.56c-5.12 2.883-11.986.247-15.21-5.557-2.428-4.38-2.94-9.312-.74-12.782a8.507 8.507 0 013.016-2.826c5.14-2.921 12.252-.247 15.476 5.557 3.224 5.784 2.693 12.65-2.542 15.608z"
        fill="#ACC9E8"
      />
    </Svg>
  );
}


function ToggleIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6 23.241H4.724a.938.938 0 010-1.875H12.6a.938.938 0 010 1.875zM23.989 11.126h-7.875a.938.938 0 010-1.876h7.875a.938.938 0 010 1.876z"
        fill="#ACC9E8"
      />
      <Mask id="a" maskUnits="userSpaceOnUse" x={3} y={6} width={9} height={8}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 6.25h7.782v7.74H3.75V6.25z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.641 8.125a2.009 2.009 0 00-2.016 1.996c0 1.1.905 1.994 2.016 1.994a2.006 2.006 0 002.016-1.994 2.008 2.008 0 00-2.016-1.996zm0 5.865c-2.145 0-3.891-1.735-3.891-3.869 0-2.134 1.746-3.871 3.891-3.871 2.146 0 3.891 1.737 3.891 3.871S9.787 13.99 7.641 13.99z"
          fill="#ACC9E8"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.735 20.26c-1.113 0-2.018.895-2.018 1.995 0 1.101.905 1.995 2.018 1.995a2.006 2.006 0 002.015-1.995c0-1.1-.904-1.995-2.015-1.995zm0 5.865c-2.147 0-3.893-1.736-3.893-3.87 0-2.134 1.746-3.87 3.893-3.87 2.145 0 3.89 1.736 3.89 3.87 0 2.134-1.745 3.87-3.89 3.87z"
        fill="#ACC9E8"
      />
    </Svg>
  );
}

function Message(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#ACC9E8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M11.935 5.9L8.973 8.31a1.531 1.531 0 01-1.907 0L4.08 5.9" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.273 14c2.027.006 3.394-1.66 3.394-3.708V5.713C14.667 3.666 13.3 2 11.273 2H4.727C2.7 2 1.333 3.666 1.333 5.713v4.58c0 2.047 1.367 3.713 3.394 3.707h6.546z"
        />
      </G>
    </Svg>
  );
}

function Lock(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#ACC9E8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13.686 7.873V6.084a3.793 3.793 0 00-3.792-3.792 3.792 3.792 0 00-3.809 3.775v1.807" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.07 17.708H6.701a3.16 3.16 0 01-3.16-3.16v-3.574a3.16 3.16 0 013.16-3.16h6.367a3.16 3.16 0 013.16 3.16v3.574a3.16 3.16 0 01-3.16 3.16z"
        />
        <Path d="M9.886 11.836v1.85" />
      </G>
    </Svg>
  );
}

function Person(props) {
  return (
    <Svg
      className="svg-icon"
      style={{
        width: "1em",
        height: "1em",
        verticalAlign: "middle",
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ACC9E8"
      overflow="hidden"
      {...props}
    >
      <Path d="M646.783 585.968c-2.816-1.693-6.117-12.116-.162-33.751 63.535-69.094 102.756-168.046 102.756-260.532 0-147.079-101.858-250.633-241.775-250.633-139.604 0-237.12 102.716-237.12 249.8 0 93.777 39.62 193.466 103.78 262.178 6.44 21.596-1.955 29.346-7.266 31.768-63.636 23.018-302.475 107.166-302.475 223.56v152.346h893.965V788.668c-30.933-106.706-256.894-184.676-311.703-202.7zm-518.1 310.575v-83.522c0-43.991 132.965-116.923 261.836-163.52 5.302-1.962 32.556-13.283 46.866-44.636 7.6-16.644 13.593-44.42-.879-82.433l-2.549-6.684-5.03-5.095c-54.45-55.642-89.622-141.897-89.622-219.806 0-133.562 90.685-180.976 168.297-180.976 77.862 0 173.602 48.475 173.602 182.042 0 77.135-35.191 163.227-89.64 219.305 0 0-23.081 32.541-22.765 55.953.208 15.41 8.855 34.796 15.642 48.144 12.786 25.207 33.776 33.622 39.724 35.584 119.409 39.518 256.668 92.235 270.16 138.708V896.54H128.681v.003zm0 0" />
    </Svg>
  );
}

export { Qlogo, Backbtn, Menubtn, Mainlogo, ToggleIcon, Message, Lock, Person };
