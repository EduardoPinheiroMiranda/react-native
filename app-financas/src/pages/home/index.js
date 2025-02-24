import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";


import { AuthContext } from "../../contexts/auth";


export function Home(){
    
    const { signOut } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>Home</Text>

            <Button title="deslogar" onPress={() => signOut()}/>
        </View>
    );
}