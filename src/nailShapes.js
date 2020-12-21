const nailShapes = [
  {
    type: "Basic",
    size: "Kort",
    shadow: require("../src/hands/shadows/small-shadows/basic-small-shadow.png"),
  },
  {
    type: "Almond",
    size: "Kort",
    shadow: require("../src/hands/shadows/small-shadows/almond-small-shadow.png"),
  },
  {
    type: "Mountain Peak",
    size: "Kort",
    shadow: require("../src/hands/shadows/small-shadows/mountain-peak-small-shadow.png"),
  },
  {
    type: "Rounded",
    size: "Kort",
    shadow: require("../src/hands/shadows/small-shadows/round-small-shadow.png"),
  },
  {
    type: "Square",
    size: "Kort",
    shadow: require("../src/hands/shadows/small-shadows/square-almond-shadow.png"),
  },
  {
    type: "Basic",
    size: "Middel",
    shadow: require("../src/hands/shadows/middle-shadows/basic-middle-shadow.png"),
  },
  {
    type: "Almond",
    size: "Middel",
    shadow: require("../src/hands/shadows/middle-shadows/almond-middle-shadow.png"),
  },
  {
    type: "Mountain Peak",
    size: "Middel",
    shadow: require("../src/hands/shadows/middle-shadows/mountain-peak-middle-shadow.png"),
  },
  {
    type: "Rounded",
    size: "Middel",
    shadow: require("../src/hands/shadows/middle-shadows/round-middle-shadow.png"),
  },
  {
    type: "Square",
    size: "Middel",
    shadow: require("../src/hands/shadows/middle-shadows/square-middle-shadow.png"),
  },
  {
    type: "Basic",
    size: "Lang",
    shadow: require("../src/hands/shadows/large-shadows/basic-large-shadow.png"),
  },
  {
    type: "Almond",
    size: "Lang",
    shadow: require("../src/hands/shadows/large-shadows/almond-large-shadow.png"),
  },
  {
    type: "Mountain Peak",
    size: "Lang",
    shadow: require("../src/hands/shadows/large-shadows/mountain-large-shadow.png"),
  },
  {
    type: "Rounded",
    size: "Lang",
    shadow: require("../src/hands/shadows/large-shadows/round-large-shadow.png"),
  },
  {
    type: "Square",
    size: "Lang",
    shadow: require("../src/hands/shadows/large-shadows/square-large-shadow.png"),
  },
];

function getNailType(type, size) {
  return nailShapes.filter((item) => item.type === type && item.size === size);
}

export { nailShapes, getNailType };
