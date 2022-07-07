import {View} from 'react-native';
import React from 'react';

export default function Triangle() {
  return (
    <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          borderLeftWidth: 30,
          borderLeftColor: 'blue',
          borderRightWidth: 40,
          borderRightColor: 'red',
          borderBottomWidth: 50,
          borderBottomColor: 'yellow',
        }}
      />
    </View>
  );
}
