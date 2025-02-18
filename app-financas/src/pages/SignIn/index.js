import React from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { defaultStylePages } from "../../themes/defaultStylePages";


export function SignIn(){


    return(
        <KeyboardAvoidingView style={[defaultStylePages.page, styles.container]}>
            
            <Image style={styles.img} source={require("../../assets/Logo.png")}/>

            <View style={styles.inputs}>
                <TextInput placeholder="digite seu email..."/>
            </View>

            <View style={styles.inputs}>
                <TextInput placeholder="digite seu email..."/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>

            <Pressable>
                <Text style={styles.navigation}>Criar uma conta</Text>
            </Pressable>
            
        </KeyboardAvoidingView>
    );
}