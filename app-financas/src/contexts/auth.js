import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});


export function AuthProvaider({ children }){

    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");


    async function signUp(name, email, password){
        
        try{
            setLoading(true);

            await fetch(
                "http://10.0.0.100:3333/users",
                {
                    body: JSON.stringify({ name: name, email: email, password: password}),
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
            );

            setLoading(false);
            navigation.goBack();

        }catch(err){
            setLoading(false);
            console.log(err);
        }
        
    }


    async function signIn(email, password){
        
        try{
            setLoading(true);
            await fetch(
                "http://10.0.0.100:3333/login",
                {
                    body: JSON.stringify({email: email, password: password}),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then((response) => response.json())
            .then((data) => {
                setUser({id: data.id, name: data.name, email: data.email});
                setToken(data.token);
            });

        }catch(err){
            setLoading(false)
            console.log(err);
        }
    }


    return(
        <AuthContext.Provider value={{signed: !!user, signUp, signIn, loading, token}}>
            {children}
        </AuthContext.Provider>
    );
} 