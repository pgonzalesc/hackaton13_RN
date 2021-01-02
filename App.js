import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Detalle from './screens/Detalle';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Podcast" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
