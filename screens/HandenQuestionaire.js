import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { handen, quest } from "../src/questionaireData";

export default function Handen() {
  return (
    <ScreenContainer>
      <RenderList
        data={handen}
        title={"ik heb last van"}
        additionalQuestions={quest}
      />
    </ScreenContainer>
  );
}
