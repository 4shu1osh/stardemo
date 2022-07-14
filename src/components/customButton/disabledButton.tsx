import React from 'react';
import styles from './style';
import {View, Text} from 'react-native';
import COLORS from '../../utils/colors';

export function DisabledButton(props: any) {
  return (
    <View style={[styles.button, {backgroundColor: COLORS.DARK_GREY}]}>
      <Text style={[styles.label, {color: COLORS.GREY}]}>{props.label}</Text>
    </View>
  );
}
