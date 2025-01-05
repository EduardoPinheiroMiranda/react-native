import React, {useState, useEffect} from 'react';
import { Modal, TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import Description from '../description';


export default function Movies({data}){
    
    const [visibleModal, setVisibleModal] = useState(false);


    return(
        <View style={styles.container}>

            <Image
                style={styles.imagePoster}
                source={{uri: data.foto}}
                resizeMode="couver"
            />
            <View style={styles.description}>
                <Text style={styles.movieName}>{data.nome}</Text>
            </View>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={() => setVisibleModal(true)}>
                    <Text style={styles.buttonText}>ver mais</Text>
                </TouchableOpacity>
            </View>
            
            <Modal 
                transparent={true} 
                visible={visibleModal}
                animationType="slide"
            >
                <Description movies={data} back={() => setVisibleModal(false)}/>
            </Modal>
           
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: "#FFF",

        borderRadius: 10,
        marginTop: 15,
        marginBottom: 15,
        elevation: 2
    },
    imagePoster: {
        height: 200,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    description: {
        height: 50,

        justifyContent: "center",
        paddingLeft: 10,
        
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    movieName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: -100
    },
    button: {
        height: 40,
        width: 100,

        backgroundColor: "#9FBCCC",

        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

        justifyContent: "center",
        paddingLeft: 10,

        
        
    },
    buttonText: {
        fontSize: 16,
        color: "#FFF"
    }
})