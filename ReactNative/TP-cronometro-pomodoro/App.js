import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Cronometro from './components/cronometro';
import { vibrate } from "./utils";

import GlobalContext from "./components/global/context";

const DEFAULT_WORK_MINS = 5.25
const DEFAULT_BREAK_MINS = 5

const minToSeg = min => min * 60


export default function App() {

  const [timeRemaining, setTimeRemaining] = useState(minToSeg(DEFAULT_WORK_MINS))

  return (
    <View style={styles.container}>
      {/* Pruebas del TouchableOpacity */}
      {/* <TouchableOpacity
      onPress={()=> console.log("click en un texto!")}
      >
        <Cronometro />
      </TouchableOpacity> */}

      <Text style={[styles.title, styles.center]}> Tiempo de 'Trabajar | Descansar'</Text>
      <GlobalContext.Provider value={{timeRemaining}}>
        <Cronometro fatherStyle={styles} />
      </GlobalContext.Provider>
      

      <View style={[styles.center, styles.buttonContainer]}>
        <Button title='Iniciar' />
        <Button title='Reiniciar' />
      </View>
      
      
      {/* <Button
        title='Vibrar'
        onPress={vibrate}
       /> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',    
    paddingTop: 100
  },
  center:{
    alignSelf: 'center'
  },
  title:{
    fontSize: 20
  },
  buttonContainer:{
    marginTop: 10,
    flexDirection: 'row-reverse'
  }
});
