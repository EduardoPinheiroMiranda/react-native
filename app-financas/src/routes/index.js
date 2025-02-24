import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AuthContext } from "../contexts/auth";


export function Routes(){

    const { signed, loadingPage } = useContext(AuthContext);


    if(loadingPage){
        return(
            <View style={{flex: 1, justifyContent: "center", alignIten: "center"}}>
                <ActivityIndicator size={24} color="#131313"/>
            </View>
        );
    }


    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}