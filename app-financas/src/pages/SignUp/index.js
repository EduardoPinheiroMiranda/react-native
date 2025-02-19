import React from "react";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { styles } from "../SignIn/styles";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";


export function SignUp(){


    return(
        <KeyboardAvoidingView 
            style={[defaultStylePages.page, styles.container]}
            behaviar={Platform.OS === "ios" ? "padding" : ""}
            enabled
        >
            <View style={styles.inputs}>
                <TextInput placeholder="nome"/>
            </View>

            <View style={styles.inputs}>
                <TextInput placeholder="email"/>
            </View>

            <View style={styles.inputs}>
                <TextInput placeholder="senha"/>
            </View>


            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}