import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import RoutesAuthentication from './src/routes/Authentication'

export default function App() {
  return (
    <NavigationContainer>
      <RoutesAuthentication />
    </NavigationContainer>
  );
}
