import React from 'react';
import COLORS from '../../utils/colors';
import {TextInput, View, Image, StyleSheet} from 'react-native';
import LOCAL_IMAGES from '../../utils/localImages';

export default function SearchBar(props: any) {
  return (
    <View style={styles.container}>
      <Image source={LOCAL_IMAGES.SEARCH_ICON} style={styles.searchIcon} />
      <TextInput
        {...props}
        autoFocus={true}
        placeholder={props.label}
        placeholderTextColor={COLORS.GREY}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 10,
    position: 'absolute',
    zIndex: 1,
    left: 30,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
    fontSize: 16,
    borderColor: COLORS.WHITE,
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingLeft: 40,
    paddingVertical: 5,
    marginVertical: 20,
    height: 40,
    width: '90%',
  },
});
