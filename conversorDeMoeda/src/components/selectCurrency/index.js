import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Picker } from '@react-native-picker/picker';


export function SelectCurrency(props){
    
    const currencies = props.data.map((value, index) => {
        return <Picker.Item key={index} label={value.label} value={value.value}/>
    })
    

    return(
        <Picker 
            style={styles.container}
            selectValue={props.selectValue}
            onValueChange={(value) => props.onValueChange(value)}
        >
            {currencies}
        </Picker>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    }
})