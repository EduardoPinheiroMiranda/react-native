import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/home";


const Drawer = createDrawerNavigator();


export function AppRoutes(){
    <Drawer.Screen
        name="Home"
        component={Home}
    />
}