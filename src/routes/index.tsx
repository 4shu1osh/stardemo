import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../modules/screens/login';
import SplashScreen from '../modules/screens/splashScreen';
import SignUp from '../modules/screens/signUp';
import VerifyOTP from '../modules/screens/verifyOTP';
import ROUTE_NAMES from './routeNames';
import WhoAreYou from '../modules/screens/whoAreYou';
import CompleteProfile from '../modules/screens/completeProfile';


const Stack = createNativeStackNavigator();

export default function Routes() {
return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
         options={{
          gestureEnabled: false,
        }}
          name={ROUTE_NAMES.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen name={ROUTE_NAMES.SIGN_UP_SCREEN} component={SignUp} />
        <Stack.Screen name={ROUTE_NAMES.LOGIN_SCREEN} component={Login} />
        <Stack.Screen name={ROUTE_NAMES.WHO_ARE_YOU} component={WhoAreYou} />
        <Stack.Screen name={ROUTE_NAMES.COMPLETE_PROFILE} component={CompleteProfile} />
        <Stack.Screen
          name={ROUTE_NAMES.VERIFY_OTP_SCREEN}
          component={VerifyOTP}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
