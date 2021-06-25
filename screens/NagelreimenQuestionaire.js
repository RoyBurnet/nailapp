import React, { useState } from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { nagelRiemen, quest } from "../src/questionaireData";

export default function NagelRiemen({ navigation }) {
  const [questions, setQuestions] = useState(nagelRiemen);
  const [additonalQuestions, setAdditionalQuestions] = useState(quest);
  const [title, setTitle] = useState("ik heb last van");

  return (
    <ScreenContainer>
      <RenderList
        data={questions}
        title={title}
        additionalQuestions={additonalQuestions}
      />
    </ScreenContainer>
  );
}
