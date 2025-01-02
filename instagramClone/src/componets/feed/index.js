import React, {Component} from "react";
import {Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            feed: this.props.data,
            liked: require("../../../assets/like.png")
        };

        this.likePost = this.likePost.bind(this);
    }


    likePost(userId){
        let feed = this.state.feed;
        
        if(feed.likeada === false){
            this.setState({liked: require("../../../assets/likeada.png")});
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }else{
            this.setState({liked: require("../../../assets/like.png")});
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
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
                        <TouchableOpacity onPress={() => this.likePost(this.state.feed.id)}>
                            <Image
                                style={styles.buttons}
                                source={this.state.liked}
                            />
                        </TouchableOpacity>

                        <Text style={styles.numberOfLikes}>{this.state.feed.likers}</Text>
                        
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
        marginTop: 10
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
    }
});