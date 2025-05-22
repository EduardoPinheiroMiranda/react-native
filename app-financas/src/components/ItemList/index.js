import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

// icons
import AntDesign from '@expo/vector-icons/AntDesign';


export function ItemList({ type, value }){


    return (
        <View style={styles.container}>

           <View  style = {[
                styles.tag,
                {
                    backgroundColor: type === "receita" ? "#00B94A" : "#EF463A"
                }
            ]}>
                <AntDesign 
                    name={type === "receita" ? "arrowup" : "arrowdown"} 
                    size={14}
                    color="white"
                />
                <Text style = {styles.label}>{type}</Text>
           </View>
           <Text style = {styles.value}>R$ {value}</Text>

        </View>
    );
}