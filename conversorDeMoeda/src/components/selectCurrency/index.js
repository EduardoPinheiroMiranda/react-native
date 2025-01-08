import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Picker } from '@react-native-picker/picker';


export function SelectCurrency(){


    return(
        <Picker style={styles.container}>
            <Picker.Item value="BTC" key={0} label="BTC"/>
        </Picker>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    }
})