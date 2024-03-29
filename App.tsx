import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/screens/MainScreens/HomeScreen/HomeScreen';
import ArtScreen from './src/screens/MainScreens/ArtScreen/ArtScreen';
import ConcertScreen from './src/screens/MainScreens/ConcertScreen/ConcertScreen';
import TheaterScreen from './src/screens/MainScreens/TheaterScreen/TheaterScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TheaterDetailScreen from './src/screens/DetailScreens/TheaterDetailScreens/TheaterDetailScreen';
import ArtDetailScreen from './src/screens/DetailScreens/ArtDetailScreens/ArtDetailScreen';
import ConcertDetailScreen from './src/screens/DetailScreens/ConcertDetailScreens/ConcertDetailScreen';
import HomeDetailScreen from './src/screens/DetailScreens/HomeDetailScreens/HomeDetailScreen';
import OutOfDateActivityScreen from './src/screens/MainScreens/OutOfDateScreen/OutOfDateActivityScreen';
import OutOfDateDetailScreen from './src/screens/DetailScreens/OutOfDateDetailScreens/OutOfDateDetailScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function TabNav()  {
return(
  <Tab.Navigator initialRouteName='HomeScreenTab'>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Art"
          component={ArtScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="paint-brush" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Concert"
          component={ConcertScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="music" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Theater"
          component={TheaterScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon2 name="theater-masks" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Out Of Date"
          component={OutOfDateActivityScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="history" size={22} color={color} />
            ),
          }} 
          />
    
      </Tab.Navigator>

)
}

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Art'  
      screenOptions={
    {
      headerShown: false
    }
  } >
        <Stack.Screen name="HomeScreen" component={TabNav} />
        <Stack.Screen name="ArtScreen" component={ArtScreen} />
        <Stack.Screen name="ConcertScreen" component={ConcertScreen} />
        <Stack.Screen name="TheaterScreen" component={TheaterScreen} />
        <Stack.Screen name="TheaterDetailScreen" component={TheaterDetailScreen} />
        <Stack.Screen name="ArtDetailScreen" component={ArtDetailScreen} />
        <Stack.Screen name="ConcertDetailScreen" component={ConcertDetailScreen} />
        <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
        <Stack.Screen name="OutOfDateActivityScreen" component={OutOfDateActivityScreen} />
        <Stack.Screen name="OutOfDateDetailScreen" component={OutOfDateDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



 export default App;
