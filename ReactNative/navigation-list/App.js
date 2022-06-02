import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Details from './screens/Details';
import Home from "./screens/Home";
import Login from "./screens/Login";


import getContacts from "./services/contacts";

export default function App() {

  const StackNavigator = createStackNavigator()
  return (      

    <NavigationContainer>
      <StackNavigator.Navigator>
        {/* Todo lo que este dentro del stack estara disponible dentro del flujo de navegacion */}

       
        <StackNavigator.Screen name='Inicio' component={Home}  />
        <StackNavigator.Screen name='Detalles' component={Details}  />
        <StackNavigator.Screen name='Login' component={Login}  />

      </StackNavigator.Navigator>
    </NavigationContainer>
    
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
