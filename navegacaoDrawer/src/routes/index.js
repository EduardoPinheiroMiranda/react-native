import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";


const Drawer = createDrawerNavigator();


export default function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Sobre" component={Sobre}/>
        </Drawer.Navigator>
    );
}