import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export function EnabledButton(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  </TouchableOpacity>
  )
}


