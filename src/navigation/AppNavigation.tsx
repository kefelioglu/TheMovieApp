import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {secondScreen,StartScreen,PopularMovies} from '../screens/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Popular') {
          iconName = focused
            ? 'videocam'
            : 'videocam-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#05b4e3',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen
          name="Popular"
          component={PopularMovies}
        />
        <Tab.Screen
          name="Profile"
          component={secondScreen}
        />
      </Tab.Navigator>
  );
};


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          component={TabNavigator}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;