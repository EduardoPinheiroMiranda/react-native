import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from './configs/firebase-connection.js';
import { addDoc, collection, doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";


export default function App() {

  const [name, setName] = useState("carregando...");

  // useEffect(() => {

  //   async function getUser(){

  //     const docRef = doc(db, "user", "sekaLYE98Y6M9uv74cCo");

  //     // await getDoc(docRef)
  //     // .then((snapshot) => {
  //     //   setName(snapshot.data()?.name);
  //     // }).catch((err) => {
  //     //   console.log(err);
  //     // });
  //     // console.log("oi");

  //     onSnapshot(doc(db, "user", "sekaLYE98Y6M9uv74cCo"), (response) => {
  //       console.log(response.data());
  //     })

  //   }
  //   getUser();

  // }, []);


  async function insertData(){

    // await setDoc(doc(db, "user", "2"), {
    //   idade: "25",
    //   name: "Ricardo",
    //   sonho: "ficar rico tbm"
    // })
    // .then(() => {
    //   console.log("cadastrado");
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    await addDoc(collection(db, "user"), {
      idade: "27",
      name: "Ricardo",
      sonho: "ficar rico tbm tbm"
    })

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 20}}>Nome de usuário: {name}</Text>
      <Button title="adicionar" onPress={insertData}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
