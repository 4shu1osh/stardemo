import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../../utils/colors';
import styles from './style';

export function EnabledButton(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, props.style]}>
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
    </View>
  </TouchableOpacity>
  )
}

export function DisabledButton(props: any) {
  return (
    <View style={[styles.button, {backgroundColor: COLORS.DARK_GREY}]}>
    <Text style={[styles.label, {color: COLORS.GREY}]}>{props.label}</Text>
  </View>
  )
}
