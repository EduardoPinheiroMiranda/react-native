import { StatusBar } from 'expo-status-bar';
import React , { useState, useEffect } from "react";
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';
import { db } from './configs/firebase-connection.js';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from "firebase/firestore";


export default function App() {

  const [name, setName] = useState("");
  const [sonho, setSonho] = useState("");
  const [idade, setIdade] = useState("");
  const [users, setUser] = useState([]);


  useEffect(() => {

    async function getUser(){

      // const docRef = doc(db, "user", "sekaLYE98Y6M9uv74cCo");

      // await getDoc(docRef)
      // .then((snapshot) => {
      //   setName(snapshot.data()?.name);
      // }).catch((err) => {
      //   console.log(err);
      // });
      // console.log("oi");

      // onSnapshot(doc(db, "user", "sekaLYE98Y6M9uv74cCo"), (response) => {
      //   console.log(response.data());
      // })

      getDocs(collection(db, "user")).then((snapshot) => {
        let listUser = [];

        snapshot.forEach((doc) =>{
          listUser.push({
            id: doc.id,
            name: doc.data().name,
            idade: doc.data().idade,
            sonho: doc.data().sonho
          })
        });

        setUser(listUser);
      });
      console.log(users)
      

    }
    getUser();

  }, []);


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
      idade: idade,
      name: name,
      sonho: sonho
    }).then(() => {
      setName();
      setIdade();
      setSonho();
      alert("cadastrado");
    })

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 20}}>Nome de usuário: {name}</Text>

      <TextInput 
        style={styles.input}
        placeholder="digite seu nome..."
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput 
        style={styles.input}
        placeholder="digite sua idade..."
        value={idade}
        keyboardType="numeric"
        onChangeText={(value) => setIdade(value)}
      />
      <TextInput 
        style={styles.input}
        placeholder="digite seu sonho..."
        value={sonho}
        onChangeText={(value) => setSonho(value)}
      />

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
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 20
  }
});
