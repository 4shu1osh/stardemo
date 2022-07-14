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
    height: 36,
    width: 36,
    borderRadius: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    left: 16
  },
  imgContainer: {
    height: 34,
    width: 34,
    borderRadius: 50,
    padding: 5,
    backgroundColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {
    height: 33,
    width: 33,
    borderRadius: 50,
  },
});
