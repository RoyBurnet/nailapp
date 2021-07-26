import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { handen, quest } from "../src/questionaireData";

const imageHanden = require("../src/images/handthumb.png");
const route = "AdviesScreen";

export default function Handen({ navigation }) {
  const pressHandler = (data) => {
    navigation.navigate({ name: route, params: data });
  };

  return (
    <ScreenContainer image={imageHanden} title="Handen">
      <RenderList
        data={handen}
        title={"Waar kunnen we je mee helpen?"}
        additionalQuestions={quest}
        pressHandler={pressHandler}
      />
    </ScreenContainer>
  );
}
