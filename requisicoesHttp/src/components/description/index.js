import React, {useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function Description(props){
    
    return(
        <View style={styles.modal}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={props.back}>
                    <Text style={styles.buttonText}>voltar</Text>
                </TouchableOpacity>

                <View style={styles.description}>
                    <Text style={styles.textdescription}>
                        {props.movies.sinopse}
                    </Text>
                </View>
            </View>
           
        </View>
    );
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,

        justifyContent: "flex-end"
    },
    container: {
        backgroundColor: "#1f2833",
        height: "50%",

        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },

    button: {
        backgroundColor: "red",

        height: 30,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,

        justifyContent: "center",
        paddingLeft: 10
    },
    buttonText: {
        color: "#fff", 
        fontSize: 16,
        fontWeight: 600
    },

    description: {
        padding: 20
    },
    textdescription: {
        color: "#fff",
        textAlign: "justify"
    }
})