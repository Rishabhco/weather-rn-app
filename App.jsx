/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import { LogBox} from 'react-native';

const Stack = createNativeStackNavigator();

// LogBox.ignoreLogs([
//   'Non-serializable values were found in the navigation state',
// ]);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
