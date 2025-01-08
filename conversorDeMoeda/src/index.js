import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants";

import { SelectCurrency } from './components/selectCurrency';
import { getCurrency } from './services/api-quotation/getCurrency';


export default function App(){
  
  const [currency, setCurrency] = useState([]);
  const [selectCurrency, setSelectCurrency] = useState("");
  const [value, setValue] = useState("0");

  const [resultado, setResultado] = useState(null);


  async function convert(){
  
    if(selectCurrency === "" || value === "0"){
      return ;
    }


    const currencyInfo = await getCurrency(`all/${selectCurrency}-BRL`);
    const valorConvertido = (currencyInfo[selectCurrency].ask * value).toFixed(2)
    setResultado(valorConvertido)
  }
  

  useEffect(() => {

    async function getListCurrency(){

      let listCurrency = []

      const response = await getCurrency("all");
      Object.keys(response).map((currency) => {
        listCurrency.push({
          key: currency,
          label: currency,
          value: currency
        })
      })

      setCurrency(listCurrency);
      setSelectCurrency(listCurrency[0].value)
    }

    getListCurrency();
    
  }, []);


  return(
    <View style={styles.conteiner}>

      <StatusBar style="light"/>
      <View style={styles.sectionCurrency}>
        <View>
            <Text style={styles.label}>Selecione sua moeda</Text>
            <SelectCurrency
              data={currency}
              selectValue={selectCurrency}
              onValueChange={(value) => setSelectCurrency(value)}
            />
        </View>
      </View>

      <View style={styles.sectionValues}>
        <Text style={styles.label}>Digite um valor para converter em (R$)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value}
          onChangeText={(value) => setValue(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={convert}>
        <Text>Converter</Text>
      </TouchableOpacity>

      {
        resultado !== null && (
          <View  style={styles.result}>
            <Text style={styles.label}>{value} {selectCurrency}</Text>
            <Text style={styles.label}>correspondera a</Text>
            <Text style={styles.label}>R$ {resultado}</Text>
          </View>
        )
      }

      
    </View>
  );
} 


const styles = StyleSheet.create({
  conteiner: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",

    backgroundColor: "#121212"
  },
  sectionCurrency: {

    backgroundColor: "#ffffff",
    marginTop: 40,

    width: "80%",
    padding: 10,

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    borderBottomWidth: 1
  },
  label: {
    fontSize: 16
  },

  sectionValues: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: 80,
    padding: 10,

  },
  input: {
    paddingLeft: 20
  },

  button: {
    backgroundColor: "#fb4b57",
    width: "80%",
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  result: {
    backgroundColor: "#ffffff",
    width: "80%",
    height: 80,
    padding: 10,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 50,
    borderRadius: 10
  }

})