import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomButton(props: any) {
  return props.disabled ? 
  (
    <View style={[props.style, {backgroundColor: props.backgroundColor}]}>
      <Text style={props.labelStyle}>{props.label}</Text>
    </View>
  )
   :
  (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[props.style, {backgroundColor: props.backgroundColor}]}>
        <Text style={props.labelStyle}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )  
}
