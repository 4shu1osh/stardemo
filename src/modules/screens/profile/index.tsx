import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {
const data = useSelector(store => store.SignUpReducer)
console.log("datatatatat",data)
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}