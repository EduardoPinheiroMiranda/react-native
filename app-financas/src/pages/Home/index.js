import React, { useContext, useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import { HOST } from "@env";
import { AuthContext } from "../../contexts/auth";
import { Balance } from "../../components/balance";


import { Header } from "../../components/header";
import { format, formatDate } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { ItemList } from "../../components/ItemList";
import Fontisto from '@expo/vector-icons/Fontisto';
import { ModalDate } from "../../components/ModalDate";


export function Home(){
    
    const [date, setDate] = useState(new Date());
    const useFocused = useIsFocused();
    const { token } = useContext(AuthContext);
    const [listBalance, setListBalance] = useState([]);
    const [listMovements, setListMovements] = useState([]);
    const [visible, setVisible] = useState(false);


    useEffect(() => {

        let isActive = true;


        async function getBalance(){

            try{
                const dateFormated = format(date, "dd/MM/yyyy");
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
                const dateFormated = format(date, "dd/MM/yyyy");
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
        
        return () => isActive = false;
    }, [useFocused, date]);


    async function deleteItem(itemId){

        try{
            await fetch(`${HOST}/receives/delete?item_id=${itemId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            setDate(new Date());

        }catch(err){
            console.log(err);
        }    

    }

    function handlerFilterDate(date){
        setDate(date);
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
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Fontisto name="date" size={26} color="black"/>
                    </TouchableOpacity>
                    
                    <Text style = {styles.text}>Ultimas movimentações</Text>
                </View>
                
                <FlatList
                    data = {listMovements}
                    renderItem = {({item}) => <ItemList data={item} deleteElement={deleteItem}/>}
                    horizontal = {false}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {item => item.id}
                />
            </View>

             <Modal visible={visible} animationType="slide" transparent={true}>
                <ModalDate visible={() => setVisible(false)} filter={handlerFilterDate}/>
             </Modal>
        </SafeAreaView>
    );
}