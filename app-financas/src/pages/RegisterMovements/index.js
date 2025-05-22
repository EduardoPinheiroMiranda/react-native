import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { SelectType } from "../../components/SelectType";


export function RegisterMovements(){

    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [type, setType] = useState("receita");


    return(
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <SafeAreaView style = {[defaultStylePages.page, styles.container]}>
                <Header title="Registrar movimentação"/>

                <View style = {styles.sectionRegister}>
                    <Text style = {styles.title}>Registrar</Text>
                    <View>
                        <TextInput
                            style = {styles.textInput}
                            value = {name}
                            onChangeText = {(value) => setName(value)}
                            placeholder = "nome"
                        />
                        <TextInput
                            style = {styles.textInput}
                            value = {value}
                            onChangeText = {(value) => setValue(value)}
                            keyboardType = "numeric"
                            placeholder = "valor desejado"
                        />
                    </View>

                    <SelectType type={type} sendType={setType}/>

                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.textButton}>Registrar</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView> 
        </TouchableWithoutFeedback>
        
    );
}