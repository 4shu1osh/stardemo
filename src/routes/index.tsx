import React from 'react';
import BottomTabs from './bottomTabs';
import {StatusBar} from 'react-native';
import ROUTE_NAMES from './routeNames';
import Login from '../modules/screens/login';
import SignUp from '../modules/screens/signUp';
import WhoAreYou from '../modules/screens/whoAreYou';
import VerifyOTP from '../modules/screens/verifyOTP';
import SplashScreen from '../modules/screens/splashScreen';
import {NavigationContainer} from '@react-navigation/native';
import CompleteProfile from '../modules/screens/completeProfile';
import FullScreeVideo from '../modules/screens/home/fullScreenVideo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectSports from '../modules/screens/completeProfile/selectSports';
import ZipcodeSearch from '../modules/screens/completeProfile/zipcodeSearch';
import AthleteRecommendation from '../modules/screens/completeProfile/athleteRecommendation';

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
        <Stack.Screen
          name={ROUTE_NAMES.COMPLETE_PROFILE}
          component={CompleteProfile}
        />
        <Stack.Screen
          name={ROUTE_NAMES.SELECT_SPORTS}
          component={SelectSports}
        />
        <Stack.Screen name={ROUTE_NAMES.ZIP_CODE} component={ZipcodeSearch} />
        <Stack.Screen
          name={ROUTE_NAMES.ATHLETE_RECOMMENDATION}
          component={AthleteRecommendation}
        />
        <Stack.Screen
          name={ROUTE_NAMES.VERIFY_OTP_SCREEN}
          component={VerifyOTP}
        />

        <Stack.Screen name={ROUTE_NAMES.BOTTOM_TABS} component={BottomTabs} />
        <Stack.Screen
          name={ROUTE_NAMES.FULL_SCREEN_VIDEO}
          component={FullScreeVideo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
