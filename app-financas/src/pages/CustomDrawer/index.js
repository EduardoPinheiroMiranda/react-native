import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { AuthContext } from "../../contexts/auth";


export function CustomDrawer(props){
    
    const { user } = useContext(AuthContext);


    return(
        <DrawerContentScrollView {...props}>
            
            <View style={styles.header}>
                <Image
                    source={require("../../assets/Logo.png")}
                    styles={{width: 80, height: 80}}
                    resizeMode="contain"
                />


                <Text style={styles.title}>Bem-vindo</Text>
                <Text numberOfLines={1} style={styles.name}>
                    {user.name}
                </Text>
            </View>
            

            <DrawerItemList {...props}/> 
        </DrawerContentScrollView>
    );
}