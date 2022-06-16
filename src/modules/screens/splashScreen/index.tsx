import {View, Text, Image, ImageBackground, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';


export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

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
      //@ts-ignore
      navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN);
    }, 3000);
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
          <Image
            source={LOCAL_IMAGES.STAR}
            style={styles.starLogo}
          />
        </Animated.View>
        <Image
          source={LOCAL_IMAGES.FIVE_LOGO}
          style={styles.fiveLogo}
        />
        <Image
          source={LOCAL_IMAGES.BORDER}
          style={styles.imgBorder}
        />
      </ImageBackground>
    </View>
  );
}
