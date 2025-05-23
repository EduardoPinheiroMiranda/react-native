import React, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Header } from "../../components/header";
import { defaultStylePages } from "../../themes/defaultStylePages";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";


export function Profile(){

    const { signOut, user } = useContext(AuthContext);
    const navigation = useNavigation();


    return(
        <SafeAreaView style = {[defaultStylePages.page]}>
            <Header title="Perfil"/>
            
            <View style = {styles.sectionProfile}>

                <Text style = {styles.title}>Bem vindo de volta</Text>
                <Text numberOfLines={1} style={styles.name}>
                    {user && user.name}
                </Text>

                <TouchableOpacity 
                    onPress = {() => navigation.navigate("Registrar movimentação")}
                    style = {styles.register}
                >
                    <Text style = {styles.registerText}>Register movimentação</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress = {() => signOut()}
                    style = {styles.signOut}
                >
                    <Text style = {styles.signUotText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}