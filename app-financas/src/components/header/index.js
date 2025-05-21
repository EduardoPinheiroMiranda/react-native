import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

// icons
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";


export function Header({title}){

    const navigator = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress = {() => navigator.openDrawer()}>
                <Feather name="menu" size={30} color="black" />
            </TouchableOpacity>
            
            <Text style={styles.title}>
                {title && (title)}
            </Text>
        </View>
    );
}