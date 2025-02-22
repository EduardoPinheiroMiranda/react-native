import React, { useState, useContext } from "react";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { styles } from "../SignIn/styles";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/auth";


export function SignUp(){

    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
                    onChageText={(value) => setName(value)}
                />
            </View>

            <View style={styles.inputs}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChageText={(value) => setEmail(value)}
                />
            </View>

            <View style={styles.inputs}>
                <TextInput 
                    placeholder="senha"
                    value={password}
                    onChageText={(value) => setPassword(value)}
                    secureTextEntry={true}
                />
            </View>


            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8}
                onPress={() => signUp(name, email, password)}
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}