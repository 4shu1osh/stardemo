import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/screens/login';
import SplashScreen from '../modules/screens/splashScreen';
import SignUp from '../modules/screens/signUp';
import VerifyOTP from '../modules/screens/verifyOTP';



const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='SplashScreen'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
