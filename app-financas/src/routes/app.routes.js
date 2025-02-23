import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/home";


const Drawer = createDrawerNavigator();


export function AppRoutes(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
}