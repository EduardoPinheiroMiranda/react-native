import React from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput } from "react-native";
import { styles } from "./styles";


export function SignIn(){


    return(
        <KeyboardAvoidingView styles={styles.container}>
            <Image styles={styles.img} source={require("../../assets/Logo.png")}/>

            <View styles={styles.container}>
                <TextInput placeholder="digite seu email..."/>
            </View>
        </KeyboardAvoidingView>
    );
}