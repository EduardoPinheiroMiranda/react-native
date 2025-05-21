import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";
import { HOST } from "@env";
import { AuthContext } from "../../contexts/auth";
import { Balance } from "../../components/balance";


import { Header } from "../../components/header";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";


export function Home(){
    
    const useFocused = useIsFocused();
    const { token } = useContext(AuthContext);
    const [listBalance, setListBalance] = useState([]);


    useEffect(() => {

        let isActive = true;

        async function getMovements(){

            try{

                const dateFormated = format(new Date(), "dd/mm/yyyy");
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

            }catch(err){
                console.log(err);
            }           
        }

        getMovements();
        

        return () => isActive = false;
    }, []);

    console.log(listBalance)

    return(
        <SafeAreaView>
            <Header title="Minhas movimentações"/>

            <FlatList
                data = {listBalance}
                renderItem = {({item}) => <Balance data={item}/>}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                keyExtractor = {item => item.tag}
            />
        </SafeAreaView>
    );
}