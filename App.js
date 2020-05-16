import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Series from './src/Screens/Series';
//import Home from './src/Screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './src/Screens/Feed';
import MyStuff from './src/Screens/MyStuff';
import { JustADash } from './src/Backend/JustADash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="My Stuff" component={MyStuff} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'FoodHub',
            headerStyle: {
              backgroundColor: '#111111',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Series"
          component={Series}
          options={{
            title: 'FoodHub',
            headerStyle: {
              backgroundColor: '#111111',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
