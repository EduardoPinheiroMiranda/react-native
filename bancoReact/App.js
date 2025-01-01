import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider"


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: "",
      age: "",
      sex: null,
      limit: 0,
      isEstudent: false
    }

    this.submit = this.submit.bind(this)

  };

  submit(){

    const isEstudent = this.state.isEstudent? "sim" : "nã"


    if(
      this.state.name.length === 0 ||
      this.state.age.length === 0 ||
      this.state.sex === null
    ){
      alert("É necessário que todo os campo seja preenchidos devidamente.")
    }else{
      alert( "nome: " + this.state.name + "  idade: " + this.state.age + "  sexo: " + this.state.sex + "  limite: " + this.state.limit + "  estudante: " + isEstudent)
    }
  }


  render(){
    return(
      <View style={style.component}>

        <Text style={style.title}>Crie sua conta bancaria</Text>
        <Text style={style.text}>Preencha todos os campos abaixo</Text>

        <View style={style.form}>

          <TextInput 
            style={style.input} 
            placeholder="Digite seu nome..."
            value={this.state.name}
            onChangeText={(value) => this.setState({name: value})}
          />

          <TextInput 
            style={style.input} 
            keyboardType="numeric" 
            placeholder="Informe a sua idade"
            value={this.state.age}
            onChangeText={(value) => this.setState({age: value})}
          />


          <Picker
            style={style.picker}
            value={this.state.sex}
            onValueChange={(value) => this.setState({sex: value})}
          >
            <Picker.Item key={0} value={null} label="Selecione seu gênero"/>
            <Picker.Item key={1} value="masculino" label="Masculino"/>
            <Picker.Item key={2} value="feminino" label="Feminino"/>
            <Picker.Item key={3} value="outros" label="Outros"/>
          </Picker>


          <Text style={style.formText}>Informe o limite que deja</Text>
          <Slider
            minimumValue={0}
            maximumValue={2000}
            value={this.state.limit}
            onValueChange={(value) => this.setState({limit: value})}
          />
          <Text style={{textAlign: "center", fontSize: 20}}>{this.state.limit.toFixed(0)}</Text>


          <View style={style.student}>
            <Text style={style.textStudent}>Você é estudante </Text>
            <Switch 
              value={this.state.isEstudent}
              onValueChange={(value) => this.setState({isEstudent: value})}
            />
          </View>
          
        </View>

        <TouchableOpacity style={style.button} onPress={this.submit}>
          <Text style={style.textButton}>Criar conta</Text>
        </TouchableOpacity>

      </View>
    );
  };
};


const style = StyleSheet.create({
  component: {
    backgroundColor: "#fafafa",

    flex: 1,

    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },

  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",

    marginTop: 10,
    marginBottom: 20
  },

  text: {
    fontSize: 16,
    marginBottom: 30
  },

  input: {
    fontSize: 16,

    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 10,

    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 30,

    marginTop: 10,
    marginBottom: 10,
  },

  picker: {
    borderColor: "green",
    borderWidth: 1
  },

  formText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },

  student: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  
  textStudent: {
    width: 200
  },

  button: {
    backgroundColor: "#00CBCC",

    width: "75%",
    height: 50,

    borderRadius: 25,

    justifyContent: "center",
    margin: "auto"
  },

  textButton: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});