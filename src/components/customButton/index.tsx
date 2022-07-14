import React from 'react';
import styles from './style';
import COLORS from '../../utils/colors';
import {View, Text, TouchableOpacity} from 'react-native';

export function EnabledButton(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function DisabledButton(props: any) {
  return (
    <View style={[styles.button, {backgroundColor: COLORS.DARK_GREY}]}>
      <Text style={[styles.label, {color: COLORS.GREY}]}>{props.label}</Text>
    </View>
  );
}
