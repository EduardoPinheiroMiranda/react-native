import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notification from "expo-notifications";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true, // Mostra o banner (popup superior)
    shouldShowList: true,   // Mostra na lista de notificações (Notification Center)
  })
})


export default function App() {

  async function handlerNotification(){

    try{

      const { status } = await Notification.getPermissionsAsync();
      if(status !== "granted"){
        alert("Acesso negado.");
        return;
      }

      let expoToken = await Notification.getExpoPushTokenAsync();
      console.log(expoToken);
      
      await Notification.scheduleNotificationAsync({
        content: {
          title: "teste de msg",
          body: "esta menssagem esta sendo enviada!",
          data: {}
        },
        trigger: {
          second: 30,
        }
      })


    }catch(err){
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Aqui vou aprender a usar notificações</Text>

      <Button 
        onPress={handlerNotification}
        title="dispara notificação"
      />
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
});
