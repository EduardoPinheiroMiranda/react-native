import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";

import { SelectCurrency } from './components/selectCurrency';


const statusBarHeight = Constants.statusBarHeight


export default function App(){


  return(
    <View style={styles.conteiner}>

      <StatusBar style="light"/>
      <View style={styles.sectionCurrency}>
        <View>
            <Text style={styles.label}>Selecione sua moeda</Text>
            <SelectCurrency />
        </View>
      </View>

    </View>
  );
} 


const styles = StyleSheet.create({
  conteiner: {
    paddingTop: statusBarHeight,
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
    borderTopRightRadius: 5

  },
  label: {
    fontSize: 16
  }

})