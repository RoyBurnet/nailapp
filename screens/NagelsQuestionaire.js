import React from "react";
import ScreenContainer from "../components/ScreenContainer";
import RenderList from "../components/RenderList";
import { nagels, quest } from "../src/questionaireData";

const imageNagels = require("../src/images/nagelsthumb.png");
const route = "AdviesScreen";

export default function Nagel({ navigation }) {
  const pressHandler = (data) => {
    navigation.navigate({ name: route, params: data });
  };
  return (
    <ScreenContainer image={imageNagels} title="Nagels">
      <RenderList
        data={nagels}
        title={"ik heb last van"}
        additionalQuestions={quest}
        pressHandler={pressHandler}
      />
    </ScreenContainer>
  );
}
