import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function App(){

    const limit = 10;
    const [quantity, setQuantity] = useState(0);
    const [notification, setNotification] = useState(false);


    function addClient(){
      const result = quantity + 1;
      setQuantity(result);

      if(result === limit){
        setNotification(true);
      }
    }

    function removeClient(){
      const result = quantity - 1;
      setQuantity(result);
      setNotification(false);
    }



    return (
      <View style={styles.container}>

        <View style={styles.section}>

          <Text style={styles.title}>Pessoas no restaurante:</Text>
          <Text style={styles.indicator}>{quantity}</Text>

          {
            notification === true && (
              <Text style={styles.alert}>O restaurante atingiu sua capacidade máxima de clientes!</Text>
            )
          }
            

          <View style={styles.buttonArea}>
            
            <View style={[styles.sectionbuttonAdd, {gap: 10}]}>
              
              {
                quantity < limit ? 
                  (
                    <TouchableOpacity 
                      style={[styles.button, {backgroundColor: '#1D6AF0'}]}
                      onPress={addClient}
                    >
                      <Text style={styles.buttonText}>Adicionar</Text>
                    </TouchableOpacity>
                  ) : 
                  (
                    <View style={[styles.button, {backgroundColor: '#d4d4d4'}]}>
                      <Text style={styles.buttonText}>Adicionar</Text>
                    </View>
                  )
              }
            </View>


            <View style={[styles.sectionButtonRemove, {gap: 10}]}>
              {
                quantity === 0 ?
                (
                  <View style={[styles.button, {backgroundColor: '#d4d4d4'}]}>
                    <Text style={styles.buttonText}>Remover</Text>
                  </View>
                ):
                (
                  <TouchableOpacity 
                    style={[styles.button, {backgroundColor: '#1D6AF0'}]}
                    onPress={removeClient}
                  >
                    <Text style={styles.buttonText}>Remover</Text>
                  </TouchableOpacity>
                )
              }

            </View>
    
          </View>

        </View>

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
  section: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600
  },
  indicator: {
    backgroundColor: '#000000',
    color: '#ffffff',

    textAlign: 'center',
    fontSize: 28,
    fontWeight: 600,

    borderRadius: 5,

    marginTop: 20,
    marginBottom: 20,

    padding: 10
  },
  alert: {
    backgroundColor: '#F0BD11',
    padding: 5,
    borderRadius: 5,
    marginBottom: 15
  },
  buttonArea: {
    flexDirection: 'row',
    gap: 30

  },
  button: {
    width: 100,
    height: 50,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#ffffff'
  }
});
