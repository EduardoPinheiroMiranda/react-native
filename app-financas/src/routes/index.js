import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";


import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AuthContext } from "../contexts/auth";


export function Routes(){

    const { signed, loading } = useContext(AuthContext);


    return(
        !signed ? <AppRoutes/> : <AuthRoutes/>
    );
}