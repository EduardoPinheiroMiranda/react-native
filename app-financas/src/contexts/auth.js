import React, { createContext, useState } from "react";


export const AuthContext = createContext({});


export function AuthProvaider({ children }){


    function signUp(name, email, password){
        console.log(name);
    }


    return(
        <AuthContext.Provider value={{signUp}}>
            {children}
        </AuthContext.Provider>
    );
} 