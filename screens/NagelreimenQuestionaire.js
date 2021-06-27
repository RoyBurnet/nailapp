import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { nagelRiemen, quest } from "../src/questionaireData";

export default function NagelRiemen() {
  return (
    <ScreenContainer>
      <RenderList
        data={nagelRiemen}
        title={"ik heb last van"}
        additionalQuestions={quest}
      />
    </ScreenContainer>
  );
}
