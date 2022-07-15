import styles from './style';
import { useSelector } from 'react-redux';
import React, {useEffect, useRef} from 'react';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {View, Image, ImageBackground, Animated} from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
 
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {authToken} = useSelector((store:any)=>store.verificationReducer)


  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    setTimeout(() => {
      if(authToken)
      {navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: ROUTE_NAMES.BOTTOM_TABS}],
        }),
      );}
      else
      {navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: ROUTE_NAMES.SIGN_UP_SCREEN}],
        }),
      );}
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={LOCAL_IMAGES.SPLASH_SCREEN}
        style={styles.backgroundImg}>
        <Animated.View
          style={[
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image source={LOCAL_IMAGES.STAR} style={styles.starLogo} />
        </Animated.View>
        <Image source={LOCAL_IMAGES.FIVE_LOGO} style={styles.fiveLogo} />
        <Image source={LOCAL_IMAGES.BORDER} style={styles.imgBorder} />
      </ImageBackground>
    </View>
  );
}
