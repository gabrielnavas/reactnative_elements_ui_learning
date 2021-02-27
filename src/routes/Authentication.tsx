import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../screens/Register'

const Stack = createStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default Authentication
