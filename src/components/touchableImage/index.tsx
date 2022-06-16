import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TouchableImage(props:any) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
      <Image source={props.source} style={props.style} />
    </TouchableOpacity>
  );
}
