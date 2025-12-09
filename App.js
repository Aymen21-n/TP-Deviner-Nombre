import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Result from './screens/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Jeu des 4 chiffres" }}
        />
        <Stack.Screen 
          name="Result" 
          component={Result} 
          options={{ title: "Résultat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
