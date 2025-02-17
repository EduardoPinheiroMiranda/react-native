import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";


const AuthStack = createNativeStackNavigator();


export function AuthRoutes(){


    return(
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen 
                name="SignIn" 
                component={SignIn}
            />
            <AuthStack.Screen 
                name="SignUp" 
                component={SignUp}
            />
        </AuthStack.Navigator>
    );
}