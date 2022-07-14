import React from 'react';
import FONTS from '../../utils/fonts';
import COLORS from '../../utils/colors';
import STRINGS from '../../utils/strings';
import LOCAL_IMAGES from '../../utils/localImages';
import {View, Image, Text, StyleSheet} from 'react-native';

const {COMMON} = STRINGS;

const ListEmptyComponent = ({searchText}: any) => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={LOCAL_IMAGES.NO_DATA} style={styles.emptyImage} />
      <Text style={[styles.heading, {fontSize: 16, letterSpacing: 0}]}>
        {COMMON.NO_DATA_FOUND}
      </Text>
      <Text style={styles.emptyText}>
        {COMMON.NO_DATA_FOUND_DESC + `'${searchText}'`}
      </Text>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    marginBottom: 10,
    letterSpacing: 1,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.GREY,
    textAlign: 'center',
    fontFamily: FONTS.HELVETICA,
  },
  emptyContainer: {
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
