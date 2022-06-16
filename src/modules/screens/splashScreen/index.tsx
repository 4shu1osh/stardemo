import {View, Text, Image, ImageBackground, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

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
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('../../../assets/images/SplashScreen.png')}
        style={styles.backgroundImg}>
 <Animated.View
          style={[
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image
            source={require('../../../assets/images/Star.png')}
            style={styles.starLogo}
          />
        </Animated.View>
        <Image
          source={require('../../../assets/images/FiveLogo.png')}
          style={styles.fiveLogo}
        />
        <Image
          source={require('../../../assets/images/Border.png')}
          style={styles.imgBorder}
        />
        
      </ImageBackground>
      
    </View>
  );
}
