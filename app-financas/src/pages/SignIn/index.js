import React, { useContext } from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";


export function SignIn(){

    const navigation = useNavigation();



    return(
        <KeyboardAvoidingView 
            style={[defaultStylePages.page, styles.container]}
            behaviar={Platform.OS === "ios" ? "padding" : ""}
            enabled
        >
            
            <Image style={styles.img} source={require("../../assets/Logo.png")}/>

            <View style={styles.inputs}>
                <TextInput placeholder="email"/>
            </View>

            <View style={styles.inputs}>
                <TextInput placeholder="senha"/>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
            >
                <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                <Text style={styles.navigation}>Criar uma conta</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}