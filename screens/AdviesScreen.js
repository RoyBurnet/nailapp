import React from "react";
import AdviceComponent from "../components/AdviceComponent";

export default function AdviesScreen({ route, navigation }) {
  const pressHandler = (data) => {
    navigation.navigate({ name: "ProductScreen", params: data });
  };

  return <AdviceComponent data={route.params} pressHandler={pressHandler} />;
}
