import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogsScreen from 'screens/LogsScreen';
import AddLogScreen from 'screens/AddLogScreen';

const Tab = createBottomTabNavigator();

const AuthenticatedNavigation: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Logs" component={LogsScreen} />
    <Tab.Screen name="Add Logs" component={AddLogScreen} />
  </Tab.Navigator>
);

export default AuthenticatedNavigation;
