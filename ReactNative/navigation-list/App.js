import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Details from './screens/Details';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from './screens/Profile';
import authenticationContext from './services/authenticationContext';


// import getContacts from "./services/contacts";

import AuthenticationContext, { authData } from "./services/authenticationContext";

export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authenticationData, setAuthenticationData] = useState(authData)





  const StackNavigator = createStackNavigator()
  return (
    <AuthenticationContext.Provider value={{authenticationData, setAuthenticationData}} >
      <NavigationContainer>
        <StackNavigator.Navigator>
          {/* Todo lo que este dentro del stack estara disponible dentro del flujo de navegacion */}

          {
            authenticationData.id ?

              <>
                <StackNavigator.Screen name='Inicio' component={Home} />
                <StackNavigator.Screen name='Detalles' component={Details} />
                <StackNavigator.Screen name='Profile' component={Profile} />
              </>
              :
              <StackNavigator.Screen name='Login' component={Login} />
          }



        </StackNavigator.Navigator>
      </NavigationContainer>
    </AuthenticationContext.Provider>


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
