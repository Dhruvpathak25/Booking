import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from './screens/ListScreen';
import FormScreen from './screens/FormScreen';
import SlotScreen from './screens/SlotScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Slot" component={SlotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
