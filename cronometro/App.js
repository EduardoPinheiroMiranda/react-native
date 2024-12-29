import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";


export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      number: 0,
      button: "start"
    }

    this.timer = null;
    this.timersSave = [];
    this.start = this.start.bind(this);
    this.save = this.save.bind(this);
    this.clear = this.clear.bind(this);
  }

  start(){

    if(this.timer === null){
      this.timer = setInterval( () => {
        this.setState({number: this.state.number + 0.1,})
      }, 100);

      this.setState({button: "stop"})
    }else{
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: "start"});
    }

  }

  save(){
    this.timersSave.push(this.state.number);
  }

  clear(){

    if(this.timer === null){
      this.setState({
        button: "start",
        number: 0
      })
    }else{
      clearInterval(this.timer)
      this.setState({
        button: "start",
        number: 0
      });
      this.timer = null;
    }

    this.timersSave = [];

  }


  render(){

    return(
      <View style={style.conteiner}>

        <View style={style.stopWacth}>
           <Image 
            style={style.image} 
            source={require("./assets/cronometro.png")}
          />

          <Text style={style.timer}>{this.state.number.toFixed(1)}</Text>  
        </View>
       
        <View style={style.controls}>

          <TouchableOpacity style={style.buttons} onPress={this.start}>
            <Text style={style.buttonText}>{this.state.button}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttons} onPress={this.save}>
            <Text style={style.buttonText}>save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttons} onPress={this.clear}>
            <Text style={style.buttonText}>clear</Text>
          </TouchableOpacity>

        </View>

        <View style={style.ranking}>
          <ScrollView >
            {
              this.timersSave.map((timer) => {

                const index = this.timersSave.indexOf(timer);

                return(
                    <Text style={style.rankingText}>{index + 1}   -   {timer.toFixed(2)}s</Text>
                );
              })
            }
          </ScrollView>
        </View>

      </View>
    );
  }

}

const style = StyleSheet.create({
  conteiner: {
    backgroundColor: "#EB8D00",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  stopWacth:{
    alignItems: "center"
  },

  timer: {
    width: 100,
    textAlign: "center",
    color: "#fff",
    fontSize: 50,
    fontWeight: 600,
    marginTop: -150,
    marginBottom: 100
  },

  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    marginTop: 20
  },

  buttons: {
    backgroundColor: "#fff",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600
  },

  ranking: {
    borderColor: "#FAFAFA",
    borderWidth: 2,
    borderRadius: 10,

    marginTop: 20,
    width: 350,
    height: 150
  },

  rankingText: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,

    color: "#fff",
    fontSize: 20,

    borderBottomWidth: 1,
    borderColor: "#FAFAFA",
    
    width: 340
  }

});