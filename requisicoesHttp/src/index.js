import Constants from 'expo-constants';
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import getMovies from './services/getMovies';

import Movies from './components/movies';


const statusBarHeight = Constants.statusBarHeight;


export default function App(){
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {

        async function findMovies(){
            const movies = await getMovies("https://sujeitoprogramador.com/r-api/?api=filmes");
            setMovies(movies);
            setLoading(true);
        }

        findMovies();
    }, []);


    if(!loading){
        return(
            <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                <ActivityIndicator color="#000" size={50}/>
            </View>
        );
    }else{
        return(
            <View style={styles.container}>
                <FlatList
                    data={movies}
                    renderItem={({item}) => <Movies data={item}/>}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#FAFAFA",
        marginTop: statusBarHeight + 5,
        paddingLeft: 20,
        paddingRight: 20,
    }
})