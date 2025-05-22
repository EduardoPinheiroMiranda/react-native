import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

// icon
import AntDesign from '@expo/vector-icons/AntDesign';


export function SelectType({ type, sendType }){

    
    return (
        <View style={styles.container}>

            <TouchableOpacity 
                onPress = {() => sendType("receita")}
                style = {[
                    styles.buttonType,
                    {
                        backgroundColor: type === "receita" ? "#FFFFFF" : "#E7E7E7",
                        borderColor: type === "receita" ? "#3B3DBF" : "transparent"
                    }
                ]}>
                <AntDesign name="arrowup" size={24} color="black" />
                <Text style = {styles.label}>Receita</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress = {() => sendType("despesa")}
                style = {[
                    styles.buttonType,
                    {
                        backgroundColor: type === "despesa" ? "#FFFFFF" : "#E7E7E7",
                        borderColor: type === "despesa" ? "#3B3DBF" : "transparent"
                    }
                ]}>
                <AntDesign name="arrowdown" size={24} color="black" />
                <Text style = {styles.label}>Despesa</Text>
            </TouchableOpacity>

        </View>
    );
}