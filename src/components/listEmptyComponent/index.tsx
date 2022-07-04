import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/fonts';
import LOCAL_IMAGES from '../../utils/localImages';
import STRINGS from '../../utils/strings';

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
