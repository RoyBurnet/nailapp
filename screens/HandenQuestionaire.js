import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { handen, quest } from "../src/questionaireData";

const imageHanden = require("../src/images/handthumb.png");

export default function Handen() {
  return (
    <ScreenContainer image={imageHanden} title="Handen">
      <RenderList
        data={handen}
        title={"Waar kunnen we je mee helpen?"}
        additionalQuestions={quest}
      />
    </ScreenContainer>
  );
}
