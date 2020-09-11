import React from 'react';
import MapScreen from '../screens/mapScreen';
import BicycleScreen from '../screens/bicycleScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MAP" component={MapScreen} />
      <Stack.Screen name="StationsDetails" component={BicycleScreen} />
    </Stack.Navigator>
  );
};
