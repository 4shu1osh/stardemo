import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/screens/login';
import SplashScreen from '../modules/screens/splashScreen';
import SignUp from '../modules/screens/signUp';
import VerifyOTP from '../modules/screens/verifyOTP';
import ROUTE_NAMES from './routeNames';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
       <StatusBar barStyle='light-content'/>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTE_NAMES.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen name={ROUTE_NAMES.SIGN_UP_SCREEN} component={SignUp} />
        <Stack.Screen name={ROUTE_NAMES.LOGIN_SCREEN} component={Login} />
        <Stack.Screen
          name={ROUTE_NAMES.VERIFY_OTP_SCREEN}
          component={VerifyOTP}
        />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
