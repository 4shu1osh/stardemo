import {View, Image, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/fonts';
import LOCAL_IMAGES from '../../utils/localImages';
import STRINGS from '../../utils/strings';
const {COMMON} = STRINGS;

const NoDataComponent = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (isLoading)
      return (
        <ActivityIndicator
          animating={isLoading}
          size="large"
          color={COLORS.BLUE}
        />
      );
    else
      return (
        <View style={styles.emptyContainer}>
          <Image source={LOCAL_IMAGES.EMPTY_BOX} style={styles.emptyImage} />
          <Text style={[styles.heading, {fontSize: 16, letterSpacing: 0}]}>
            {COMMON.CANNOT_FETCH_DATA}
          </Text>
          <Text style={styles.emptyText}>{COMMON.CANNOT_FETCH_DATA_DESC}</Text>
        </View>
      );
  };

export default NoDataComponent;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 10,
    letterSpacing: 1,
  },
  emptyImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  emptyText: {
    color: COLORS.GREY,
    fontSize: 14,
    fontFamily: FONTS.HELVETICA,
    textAlign: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
});
