import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { nagelRiemen, quest } from "../src/questionaireData";

const imageNagelRiemen = require("../src/images/nagelriementhumb.jpeg");
const route = "AdviesScreen";

export default function NagelRiemen({ navigation }) {
  const pressHandler = (data) => {
    navigation.navigate({ name: route, params: data });
  };
  return (
    <ScreenContainer image={imageNagelRiemen} title="Nagelriemen">
      <RenderList
        data={nagelRiemen}
        title={"ik heb last van"}
        additionalQuestions={quest}
        pressHandler={pressHandler}
      />
    </ScreenContainer>
  );
}
