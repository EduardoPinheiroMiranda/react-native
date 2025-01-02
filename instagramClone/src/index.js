import React, {Component} from "react";
import {FlatList, TouchableOpacity, Text, View, StyleSheet, Image} from "react-native";
import Feed from "./componets/feed";


export default class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            feed: [
                {
                  id: '1', 
                  nome: 'Lucas Silva', 
                  descricao: 'Mais um dia de muitos bugs :)', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
                  likeada: false, 
                  likers: 0
                 },
                {
                  id: '2', 
                  nome: 'Matheus', 
                  descricao: 'Isso sim é ser raiz!!!!!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
                  likeada: false, 
                  likers: 0
                },
                {
                  id: '3', 
                  nome: 'Jose Augusto', 
                  descricao: 'Bora trabalhar Haha', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
                  likeada: false, 
                  likers: 3
                },
                {
                  id: '4', 
                  nome: 'Gustavo Henrique', 
                  descricao: 'Isso sim que é TI!', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
                  likeada: false, 
                  likers: 1
                },
                {
                  id: '5', 
                  nome: 'Guilherme', 
                  descricao: 'Boa tarde galera do insta...', 
                  imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
                  imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
                  likeada: false, 
                  likers: 32
                }
            ]
        };
    };


    render(){
        return(
            <View style={style.container}>
                
                <View style={style.header}>
                    <TouchableOpacity>
                        <Image style={style.logo} source={require("../assets/logo.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={style.send} source={require("../assets/send.png")}/>
                    </TouchableOpacity>
                </View>


                <View style={style.section}>
                    <FlatList
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        data={this.state.feed}
                        renderItem={({item}) => <Feed data={item}/> }
                    />
                </View>

            </View>
        );
    };

};


const style = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },

    header: {
        backgroundColor: "#fff",

        height: 55,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        padding: 5,

        borderBottomWidth: 0.2,
        shadowColor: "#000"
    },

    logo: {

    },

    send: {
        width: 23,
        height: 23
    },

    section: {

    },

    feed: {

    }
});