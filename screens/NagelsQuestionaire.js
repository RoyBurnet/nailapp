import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { nagels, quest } from "../src/questionaireData";

export default function Nagel() {
  return (
    <ScreenContainer>
      <RenderList
        data={nagels}
        title={"ik heb last van"}
        additionalQuestions={quest}
      />
    </ScreenContainer>
  );
}
