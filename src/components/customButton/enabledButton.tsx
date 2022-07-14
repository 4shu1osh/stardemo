import React from 'react';
import styles from './style';
import {View, Text, TouchableOpacity} from 'react-native';

export function EnabledButton(props: any) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
}
