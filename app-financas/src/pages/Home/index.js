import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { HOST } from "@env";
import { AuthContext } from "../../contexts/auth";
import { Balance } from "../../components/balance";


import { Header } from "../../components/header";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { ItemList } from "../../components/ItemList";
import Fontisto from '@expo/vector-icons/Fontisto';


export function Home(){
    
    const [deletedElement, setDeletedElement] = useState(false);
    const useFocused = useIsFocused();
    const { token } = useContext(AuthContext);
    const [listBalance, setListBalance] = useState([]);
    const [listMovements, setListMovements] = useState([]);



    useEffect(() => {

        let isActive = true;
        const dateFormated = format(new Date(), "dd/MM/yyyy");


        async function getBalance(){

            try{
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

        async function getMovements(){
            try{
                const request = await fetch(`${HOST}/receives?date=${dateFormated}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                const data = await request.json();
                setListMovements(data);

            }catch(err){
                console.log(err);
            }           
        }

        getBalance();
        getMovements();
        setDeletedElement(false);
        
        return () => isActive = false;
    }, [useFocused, deletedElement]);


    async function deleteItem(itemId){

            try{
                const request = await fetch(`${HOST}/receives/delete?item_id=${itemId}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                console
                setDeletedElement(true);

            }catch(err){
                console.log(err);
            }    

        }


    return(
        <SafeAreaView style={[defaultStylePages.page, styles.container]}>
            <Header title="Minhas movimentações"/>

            <View>
                <FlatList
                    data = {listBalance}
                    renderItem = {({item}) => <Balance data={item}/>}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor = {item => item.tag}
                />
            </View>

        
            <View style = {styles.listMovements}>

                <View style = {styles.titleList}>
                    <TouchableOpacity>
                        <Fontisto name="date" size={26} color="black"/>
                    </TouchableOpacity>
                    
                    <Text style = {styles.text}>Ultimas movimentações</Text>
                </View>
                
                <FlatList
                    data = {listMovements}
                    renderItem = {({item}) => <ItemList data={item} deleteElement={deleteItem}/>}
                    // horizontal = {false}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {item => item.id}
                />
            </View>

             
        </SafeAreaView>
    );
}