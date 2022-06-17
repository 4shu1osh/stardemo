import React from 'react';
import {View, Text} from 'react-native';
import COLORS from '../../utils/colors';
import styles from './style';

export function DisabledButton(props: any) {
  return (
    <View style={[styles.button, {backgroundColor: COLORS.DARK_GREY}]}>
    <Text style={[styles.label, {color: COLORS.GREY}]}>{props.label}</Text>
  </View>
  )
}


