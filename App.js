import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Series from './src/Screens/Series';
//import Home from './src/Screens/Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './src/Screens/Feed';
import MyStuff from './src/Screens/MyStuff';
import { JustADash } from './src/Backend/JustADash';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Discover') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'My Stuff') {
            iconName = focused ? 'ios-checkbox' : 'ios-checkbox-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#263238',
        inactiveBackgroundColor: '#263238',
        style: {
          backgroundColor: '#263238',
        },
      }}
    >
      <Tab.Screen name="Discover" component={Feed} />
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
            title: 'FoodHub', //ICON HERE
            headerStyle: {
              backgroundColor: '#455A64',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: "SavoyeLetPlain",
              fontSize: 34
            },
          }}
        />
        <Stack.Screen 
          name="Series"
          component={Series}
          options={({ route }) => ({
            title: route.params.seriesTitle.title,
            headerBackTitle: " ",
            headerStyle: {
              backgroundColor: '#444444',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
