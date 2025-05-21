import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { HOST } from "@env";
import { AuthContext } from "../../contexts/auth"


import { Header } from "../../components/header";
import { format } from "date-fns";


export function Home(){
    
    const { token } = useContext(AuthContext);
    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());


    useEffect(() => {

        let isActive = true;

        async function getMovements(){

            try{

                const dateFormated = format(dateMovements, "dd/mm/yyyy");
                const request = await fetch(`${HOST}/balance?date=${dateFormated}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                const data = await request.json();


                if(isActive){
                    setListBalance(data);
                }


                console.log(listBalance);
            }catch(err){
                console.log(err);
            }           
        }

        getMovements();

        return () => isActive = false;
    }, []);


    return(
        <SafeAreaView>
            <Header title="Minhas movimentações"/>
        </SafeAreaView>
    );
}