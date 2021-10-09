/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navegador from './src/screens/Navegador';

export default function App() {
  return (
    <NavigationContainer>
      <Navegador></Navegador>
    </NavigationContainer>
  );
}
