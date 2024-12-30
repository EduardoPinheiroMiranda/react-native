import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      phrase: "",
      image: require("./assets/cooke.jpeg")
    };

    this.phrases = [
      "frase de boa sorte 1",
      "frase de boa sorte 2",
      "frase de boa sorte 3",
      "frase de boa sorte 4",
      "frase de boa sorte 5",
      "frase de boa sorte 6",
      "frase de boa sorte 7",
      "frase de boa sorte 8",
      
    ];

    this.sort = this.sort.bind(this);
  }

  sort(){
    let index = Math.floor(Math.random() * this.phrases.length);
    this.setState(
      {
        phrase: ' " ' + this.phrases[index] + ' " ',
        image: require("./assets/cooke-brack.jpg")
      }
    )

  }

  render(){
    return(
      <View style={style.view}>

        <Image 
          style={style.image}
          source={this.state.image}
        />

        <Text style={style.text}>{this.state.phrase}</Text>

        <TouchableOpacity style={style.button} onPress={this.sort}>
          <View style={style.buttonArea}>
            <Text style={style.buttonText}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}


const style = StyleSheet.create({

  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    margin: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    fontSize: 18
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 20,
    textAlign: "center"
  },

  buttonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    textAlign: "center",
    color: "#fff"
  }
});