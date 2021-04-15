import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import AuthenticatedNavigation from './AuthenticatedNavigation';

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Authenticated Navigation"
        component={AuthenticatedNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
