import {View, Text, StatusBar} from 'react-native';
import React from 'react';


export default function Activity() {

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          height: 40,
          backgroundColor: 'green',
        }}
      />
    </View>
  );
}
