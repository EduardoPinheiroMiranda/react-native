import React, {Component} from "react";
import { Keyboard, TouchableOpacity, TextInput, Image, StyleSheet, Text, View, Platform, Modal } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      alcoolValue: 0,
      gasValue: 0,
      modalVisible: false,
      combustivel: ""
    };

    this.calc = this.calc.bind(this);
  }


  calc(){
    
    if(this.state.alcoolValue === 0 || this.state.gasValue === 0){
      alert("Preencha todos os campos.")
    }else{
      const result = this.state.alcoolValue / this.state.gasValue
      result <= 0.7 ? this.setState({combustivel: "álcool"}) : this.setState({combustivel: "gasolina"})
      this.setState({modalVisible: true})
      // alert(result)
    }

    
  }

  render(){
    

    return(
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          />

          <Text style={styles.text}>Qual a melhor opção?</Text>
        </View>

        <View style={styles.info}>
          <View style={styles.getValues}>
            <Text style={styles.label}>Álcool(preço por litro)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(value)=>this.setState({alcoolValue: value})}
              value={this.state.alcoolValue}
            />
          </View>

          <View style={styles.getValues}>
            <Text style={styles.label}>Gasolina(preço por litro)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(value)=>this.setState({gasValue: value})}
              value={this.state.gasValue}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={this.calc}
          >
            <Text style={styles.textInButton}>calcular</Text>
          </TouchableOpacity>
        </View>

        <Modal 
          animationType="slide"
          visible={this.state.modalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.header}>
              <Image
              style={styles.logo}
              source={require("./assets/gas.png")}
              />

              <Text style={{fontSize: 30, color: "#2AF500", fontWeight: 600}}>Compensa usar {this.state.combustivel}</Text>
            </View>

            <View style={styles.description}>
              <Text style={{fontSize: 25, color: "#fff", textAlign: "center"}}>Com os preços: </Text>
              <Text style={{fontSize: 16, color: "#d4d4d4", textAlign: "center"}}>Álcool: R$ {this.state.alcoolValue}</Text>
              <Text style={{fontSize: 16, color: "#d4d4d4", textAlign: "center"}}>Gasolina: R$ {this.state.gasValue}</Text>
            </View>

            <TouchableOpacity
              style={styles.button2}
              onPress={() => this.setState({modalVisible: false})}
            >
              <Text style={{fontSize: 20, color: "#EB3E00", textAlign: "center"}}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
      
        </Modal>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#08091E",

    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,

    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 150
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 600
  },

  getValues: {
    marginTop: 15,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    backgroundColor: "#fafafa",
    borderRadius: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#EB3E00",
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    marginTop: 40,
    borderRadius: 10
  },
  textInButton: {
    color: "#fff",
    fontSize: 20
  },

  modal: {
    backgroundColor: "#08091E",
    flex: 1
  },

  description: {
    marginTop: 30,
    marginBottom: 50
  },

  button2: {
    height: 50, 

    borderColor: "#EB3E00",
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center"
  }
  
});