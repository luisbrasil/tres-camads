import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarList from './src/view/CarList';
import CarForm from './src/view/CarForm';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CarList">
        <Stack.Screen name="CarList" component={CarList} />
        <Stack.Screen name="CarForm" component={CarForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
