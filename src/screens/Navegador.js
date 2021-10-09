import React from 'react';
import Peliculas from './Peliculas';
import Series from './Series';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Proximamente from './Proximamente';

const Tab = createBottomTabNavigator();
export default function Navegador() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: 'black',
        inactiveTintColor: 'grey',
        inactiveBackgroundColor: 'black',
      }}>
      <Tab.Screen name="peliculas" style={style.titulo} component={Peliculas} />
      <Tab.Screen
        name="series"
        component={Series}
        options={{title: 'Series'}}
      />
      <Tab.Screen
        name="proximamente"
        component={Proximamente}
        options={{title: 'Proximamente'}}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  titulo: {
    backgroundColor: 'black',
  },
});
