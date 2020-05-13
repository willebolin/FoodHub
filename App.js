import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Series from './src/Screens/Series';
import Home from './src/Screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JustADash } from './src/Backend/JustADash';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Series" component={Series} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
