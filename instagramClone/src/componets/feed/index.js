import React, {Component} from "react";
import {Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: this.props.data,
        }
    }


    render(){
        return(
            <View style={styles.component}>
            
                <View style={styles.profileSection}>
                    <Image 
                        style={styles.imageProfile}
                        source={{uri: this.state.feed.imgperfil}}
                    />

                    <Text>{this.state.feed.nome}</Text>
                </View>


                <Image
                    style={styles.imagePost}
                    resizeMode="cover"
                    source={{uri: this.state.feed.imgPublicacao}}
                />


                <View style={styles.footerPost}>

                    <View style={styles.buttonArea}>
                        <TouchableOpacity>
                            <Image
                                style={styles.buttons}
                                source={require("../../../assets/like.png")}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Image 
                                style={styles.buttons}
                                source={require("../../../assets/send.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textArea}>
                        <Text style={styles.nameUser}>{this.state.feed.nome}</Text>
                        <Text style={styles.descriptionPost}>{this.state.feed.descricao}</Text>
                    </View>
                    
                </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    component: {
        marginBottom: 20
    },

    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 5
    },
    imageProfile: {
        width: 30,
        height: 30,
        borderRadius: 25
    },

    imagePost: {
        height: 400,
        flex: 1
    },

    buttonArea: {
        flexDirection: "row",
        gap: 10,
        padding: 5
    },
    buttons: {
        width: 20,
        height: 20
    },
    textArea: {
        flexDirection: "row",
        gap: 10,
        padding: 5
    },
    nameUser: {
        fontWeight: 600
        
    },
    descriptionPost: {
        
    }


});