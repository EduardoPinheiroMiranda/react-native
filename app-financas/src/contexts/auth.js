import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { HOST } from "@env";


export const AuthContext = createContext({});


export function AuthProvaider({ children }){

    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [token, setToken] = useState("");


    useEffect(() => {

        async function loginPermanenceCheck(){

            try{
                const userToken = await AsyncStorage.getItem("userToken");

                if(userToken){
                    await fetch(
                        `${HOST}/me`,
                        {
                            method: "GET",
                            headers: {
                                "authorization": `Bearer ${userToken}`
                            }
                        }
                    )
                    .then((response) => response.json())
                    .then((data) => setUser(data));

                    setLoadingPage(false);
                }
                
                setLoadingPage(false);

            }catch(err){
                setUser(null);
                console.log(err);
                setLoadingPage(false);
            }
            
        }

        loginPermanenceCheck()
    }, [])


    async function signUp(name, email, password){
        
        try{
            setLoading(true);

            await fetch(
                `${HOST}/user`,
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
                `${HOST}/login`,
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
                if(data.error){
                    setUser(null);
                    setLoading(false);
                    return;
                }
                setUser(data);
                setLoading(false);
                AsyncStorage.setItem("userToken", data.token);
            });


        }catch(err){
            setLoading(false)
            console.log(err);
        }
    }


    return(
        <AuthContext.Provider value={{signed: !!user, signUp, signIn, loading, loadingPage, token}}>
            {children}
        </AuthContext.Provider>
    );
} 