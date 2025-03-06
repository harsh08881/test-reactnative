import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Homescreen';
import PostListScreen from './src/screens/Postlist';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PostListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
