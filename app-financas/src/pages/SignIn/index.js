import React, { useContext, useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";


export function SignIn(){

    const navigation = useNavigation();
    const { loading, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handlerLogin(){
        if(email === "" || password === ""){
            alert("Preencha todos os campos");
            return;
        }

        signIn(email, password);
    }

    return(
        <KeyboardAvoidingView 
            style={[defaultStylePages.page, styles.container]}
            behaviar={Platform.OS === "ios" ? "padding" : ""}
            enabled
        >
            
            <Image style={styles.img} source={require("../../assets/Logo.png")}/>

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
                />
            </View>

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={handlerLogin}
            >
                {
                    loading ? 
                        <ActivityIndicator size={24} color="#fff"/>
                    :
                        <Text style={styles.textButton}>Acessar</Text>
                }
                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                <Text style={styles.navigation}>Criar uma conta</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}