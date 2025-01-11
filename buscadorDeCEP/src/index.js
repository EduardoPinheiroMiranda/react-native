import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Keyboard, TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import { GetCep } from './services/api';


export default function App() {

  const [cep,setCep] = useState('');
  const [location, setLocation] = useState({});
  const inputRef = useRef(null);


  async function searchCep(){

    const response = await GetCep(cep);
    setLocation(response);
    Keyboard.dismiss();
  }
  
  function clearInput(){
    setCep('');
    inputRef.current.focus();
    setLocation({});
  }


  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.sectionCep}>
        <Text style={{fontSize: 16, marginTop: 20, fontWeight: 600}}>Digite o CEP que deseja procurar.</Text>
        <TextInput
          style={styles.input}
          value={cep}
          onChangeText={(value) => setCep(value)}
          keyboardType='numeric'
          placeholder='Ex: 12345678'
          ref={inputRef}
        />
      </View>
      <View style={styles.sectionButton}>
        <TouchableOpacity 
          style={[styles.button, {backgroundColor: '#00f'}]}
          onPress={searchCep}
        >
          <Text> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={clearInput}
        >
          <Text> Limpar </Text>
        </TouchableOpacity>
      </View>

      {
        location.cep !== undefined &&(
          <View style={styles.result}>
            <Text style={styles.text}>CEP: {location.cep}</Text>
            <Text style={styles.text}>rua: {location.logradouro}</Text>
            <Text style={styles.text}>bairro: {location.bairro}</Text>
            <Text style={styles.text}>cidade: {location.localidade}</Text>
            <Text style={styles.text}>UF: {location.uf}</Text>
          </View>
        )
      }
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 30,
    
  },
  sectionCep:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 20
  },
  sectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 50,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    backgroundColor: '#ffffff',
    
    width: '80%',

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,

    borderRadius: 10
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 600
  }
});
