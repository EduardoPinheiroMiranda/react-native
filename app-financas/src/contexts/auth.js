import React, { createContext, useState } from "react";


export const AuthContext = createContext({});


export function AuthProvaider({ children }){

    const [user, setUser] = useState({
        name: "eduardo"
    });


    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
} 