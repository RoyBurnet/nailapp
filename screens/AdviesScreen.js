import React from "react";
import AdviceComponent from "../components/AdviceComponent";

export default function AdviesScreen({ route }) {
  return <AdviceComponent data={route.params} />;
}
