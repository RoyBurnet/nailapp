import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreenNavigation } from "./StackNavigator";

import DrawerComponent from "../components/DrawerComponent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreenNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
