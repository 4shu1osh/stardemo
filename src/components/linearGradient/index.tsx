import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../utils/colors';
import LOCAL_IMAGES from '../../utils/localImages';

export default function LinearGradientComponent(img: any) {
  return (
    <LinearGradient
      colors={[COLORS.BLUE, COLORS.GREEN]}
      style={styles.gradient}>
      <View style={styles.imgContainer}>
        <Image
          source={LOCAL_IMAGES.ACCOUNT}
          style={styles.img1}
          resizeMode={'contain'}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: 36,
    height: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    width: 34,
    height: 34,
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  img1: {
    width: 33,
    height: 33,
    borderRadius: 50,
  },
});
