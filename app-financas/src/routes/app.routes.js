import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../pages/Home";
import { RegisterMovements } from "../pages/RegisterMovements";
import { Profile } from "../pages/Profile";


const Drawer = createDrawerNavigator();


export function AppRoutes(){

    return(
        <Drawer.Navigator
            screenOptions = {{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: "#FFFFFF",
                    paddingTop: 20,
                    width: 250
                },

                drawerItemStyle: {
                    borderRadius: 8
                },
                
                drawerActiveBackgroundColor: "#3b3dbf",
                drawerActiveTintColor: "#FFFFFF",

                drawerInactiveBackgroundColor: "#FFFFFF",
                drawerInactiveTintColor: "#121212",
                
                
            }}
        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Registrar movimentação" component={RegisterMovements}/>
            <Drawer.Screen name="Perfil" component={Profile}/>
        </Drawer.Navigator>
    );
}