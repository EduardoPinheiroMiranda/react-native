import React, { useState, useContext } from "react";
import { View, Text, TouchableWithoutFeedback, SafeAreaView, TextInput, TouchableOpacity, Keyboard, Alert } from "react-native";
import { Header } from "../../components/header";
import { styles } from "./styles";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { SelectType } from "../../components/SelectType";
import { HOST } from "@env";
import { format } from "date-fns";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";


export function RegisterMovements(){

    const navigation = useNavigation();
    const { token } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [type, setType] = useState("receita");


    async function sendData(){
        
        try{

            await fetch(`${HOST}/receive`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    description: name,
                    value: Number(value),
                    type: type,
                    date: format(new Date, "dd/mm/yyy")
                })
            });

            setName("");
            setValue(0);
            setType("receita");
            
            navigation.navigate("Home");

        }catch(err){
            console.log(err)
        }
    }

    function checkData() {
        
        if(name === "" || value === 0 || isNaN(parseFloat(value))){
            alert("Preencha todos os campos corretamente.");
            return;
        }

        Alert.alert(
            "Confirmar dados",
            `Tipo: ${type}\n\nValor: ${value}`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => sendData()
                }
            ]
        )
    }


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

                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = {checkData}
                    >
                        <Text style = {styles.textButton}>Registrar</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView> 
        </TouchableWithoutFeedback>
    );
}