import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';


import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();


export default function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,

        }}
      >

        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => {
              return(<Feather name="home" size={size} color={color} />);
            }
          }}  
        />

        <Tab.Screen 
          name="Sobre" 
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
              return(<AntDesign name="filetext1" size={size} color={color} />);
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}