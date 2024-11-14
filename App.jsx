

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './screens/game';

const Stack = createNativeStackNavigator();

import Home from './screens/home';


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home} />
        <Stack.Screen
        name='Game'
        component={Game}
        />


      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App;
