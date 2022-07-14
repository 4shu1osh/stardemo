import React from 'react';
import COLORS from '../utils/colors';
import ROUTE_NAMES from './routeNames';
import Home from '../modules/screens/home';
import {Image, StyleSheet} from 'react-native';
import Search from '../modules/screens/search';
import Upload from '../modules/screens/upload';
import LOCAL_IMAGES from '../utils/localImages';
import Account from '../modules/screens/account';
import Activity from '../modules/screens/activity';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BLACK,
        },
        tabBarLabelStyle: {
          color: COLORS.WHITE,
        },
      }}>
      <Tab.Screen
        name={ROUTE_NAMES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={LOCAL_IMAGES.HOME}
                style={focused ? [styles.icon, styles.iconActive] : styles.icon}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={LOCAL_IMAGES.SEARCH}
                style={focused ? [styles.icon, styles.iconActive] : styles.icon}
              />
            );
          },
        }}
        name={ROUTE_NAMES.SEARCH}
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={LOCAL_IMAGES.UPLOAD}
                style={focused ? [styles.icon, styles.iconActive] : styles.icon}
              />
            );
          },
        }}
        name={ROUTE_NAMES.UPLOAD}
        component={Upload}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={LOCAL_IMAGES.ACTIVITY}
                style={focused ? [styles.icon, styles.iconActive] : styles.icon}
              />
            );
          },
        }}
        name={ROUTE_NAMES.ACTIVITY}
        component={Activity}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return <Image source={LOCAL_IMAGES.ACCOUNT} style={styles.icon} />;
          },
        }}
        name={ROUTE_NAMES.ACCOUNT}
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  iconActive: {
    tintColor: COLORS.BLUE,
  },
});
