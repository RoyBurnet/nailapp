import React, { useState, useEffect, useContext } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";

import { handen, quest } from "../src/questionaireData";

export default function Playground({ navigation }) {
  const [questions, setQuestions] = useState(handen);
  const [title, setTitle] = useState('ik heb last van')

  return (
    <ScreenContainer>
      <RenderList data={questions} title={title} />
    </ScreenContainer>
  );
}
