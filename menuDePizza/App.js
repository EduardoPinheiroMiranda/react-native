import React, {Component} from "react";
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View, } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      pizza: 1,
      pizzas:[
        { key: 1, value: 49, label: "calabresa"},
        { key: 2, value: 25.5, label: "portuguesa"},
        { key: 3, value: 34.77, label: "carne de sol"},
        { key: 4, value: 29.5, label: "frango"},
        { key: 5, value: 23, label: "havaiana"},
      ]
    }
  }

  render(){

    const items = this.state.pizzas.map(
      (value, index) => <Picker.Item key={index} value={value.key} label={value.label} />
    )


    return(
      <View style={style.conteiner}>
        <Text style={style.title}>Menu de Pizzas</Text>
        <Text style={style.text}>Selecione um sabor de pizza:</Text>

        <Picker
          style={style.Picker}
          selectValue={this.state.pizza}
          onValueChange={(itemValue, ItemIdex) => {
            this.setState({pizza: itemValue});
            console.log(ItemIdex)
          }}
        >
          {items}
        </Picker>

        <View style={style.describe}>
          <Text style={style.textDescribe}>Pizza selecionada: {this.state.pizzas[this.state.pizza -1].label}</Text>
          <Text style={style.textDescribe}>Valor da pizza: R$ {this.state.pizzas[this.state.pizza -1].value.toFixed(2)}</Text>
        </View>
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  conteiner: {
    backgroundColor: "#fafafa",
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 900,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30
  },
  text:{
    fontWeight: 600,
    fontSize: 20
  },
  describe:{
    marginTop: 10
  },
  textDescribe: {
    fontWeight: 600,
    fontSize: 15
  }

});