import React, { useState, useContext } from "react";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { styles } from "../SignIn/styles";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { AuthContext } from "../../contexts/auth";


export function SignUp(){

    const { signUp, loading } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handlerSignUp(){
        if(name === "" || email === "" || password === ""){
            alert("Preencha todos os campos");
            return;
        }

        signUp(name, email, password);
    }

    return(
        <KeyboardAvoidingView 
            style={[defaultStylePages.page, styles.container]}
            behaviar={Platform.OS === "ios" ? "padding" : ""}
            enabled
        >
            <View style={styles.inputs}>
                <TextInput 
                    placeholder="nome"
                    value={name}
                    onChangeText={(value) => setName(value)}
                />
            </View>

            <View style={styles.inputs}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>

            <View style={styles.inputs}>
                <TextInput 
                    placeholder="senha"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={true}
                />
            </View>


            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={handlerSignUp}
            >
                {
                    loading ? 
                        <ActivityIndicator size={24} color="#FFF"/>
                    : 
                        <Text style={styles.textButton}>Cadastrar</Text>
                }
                
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}