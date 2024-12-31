import React, {Component} from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      valor: 0
    }
  }

  render(){
    return(
      <View style={style.component}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => this.setState({valor: value})}
          value={this.state.valor}
          minimumTrackTintColor="#f0f"
          maximumTrackTintColor="#f00"
        />
        <Text style={style.text}>{this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  component: {
    padding: 20
  },

  text:{
    textAlign: "center",
    marginTop: 20
  }
})