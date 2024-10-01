import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/screens/SignInScreen';
import ImageDisplayScreen from './src/screens/ImageDisplayScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ImageDisplay" component={ImageDisplayScreen} options={{ title: 'Recommendation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
