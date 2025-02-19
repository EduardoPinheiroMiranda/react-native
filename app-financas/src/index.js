import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";


import { Routes } from "./routes";
import { AuthProvaider } from "./contexts/auth";


export function App(){
  

  return(
      <NavigationContainer>
        <AuthProvaider>
          <StatusBar style="auto"/>
          <Routes/>
        </AuthProvaider>
      </NavigationContainer>
  );
}