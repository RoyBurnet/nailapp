import React, { useState } from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";

import { nagels, quest } from "../src/questionaireData";

export default function Nagel({ navigation }) {
  const [questions, setQuestions] = useState(nagels);
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
