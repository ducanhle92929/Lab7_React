import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen';
import DetailScreen from './detail';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
