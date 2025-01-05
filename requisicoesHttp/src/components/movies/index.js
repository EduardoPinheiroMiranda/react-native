
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Movies({data}){
    
    return(
        <View style={styles.container}>
            <Text>{data.nome}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        color: "red"
    }
})