import React from "react";
import { View, Text, ActivityIndicator} from "react-native";
import { AuthRoutes } from "./auth.routes";


export function Routes(){
    const loading = false;
    const signed = false;


    return(
        signed ? <View></View> : <AuthRoutes/>
    );
}