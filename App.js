import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Homescreen';
import WalletGeneratorScreen from './src/screens/WalletGeneratorScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="WalletGenerator" component={WalletGeneratorScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Text>API Data:</Text>
  );
};

export default App;
