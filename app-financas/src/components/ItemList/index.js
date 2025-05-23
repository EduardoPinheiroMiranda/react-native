import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { styles } from "./styles";

// icons
import AntDesign from '@expo/vector-icons/AntDesign';


export function ItemList({ data, deleteElement }){

    async function deleteItem(){

        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja apagar este registro?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => deleteElement(data.id)
                }
            ]
        )
    }


    return (
        <TouchableWithoutFeedback onLongPress = {() => deleteItem()}>
             <View style={styles.container}>

                <View  style = {[
                        styles.tag,
                        {
                            backgroundColor: data.type === "receita" ? "#00B94A" : "#EF463A"
                        }
                    ]}>
                        <AntDesign 
                            name={data.type === "receita" ? "arrowup" : "arrowdown"} 
                            size={14}
                            color="white"
                        />
                        <Text style = {styles.label}>{data.type}</Text>
                </View>
                <Text style = {styles.value}>R$ {data.value}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}