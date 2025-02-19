import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";


const AuthStack = createNativeStackNavigator();


export function AuthRoutes(){


    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="signIn" 
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen 
                name="signUp" 
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: "#3b3dbf",
                        borderBottomWidtn: 1
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitle: "Voltar",
                    headerBackTitleVisible: false
                }}
            />
        </AuthStack.Navigator>
    );
}