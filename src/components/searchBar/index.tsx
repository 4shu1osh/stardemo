import React from 'react'
import COLORS from '../../utils/colors'
import {TextInput} from 'react-native'

export default function SearchBar(props:any) {
  return (
  <TextInput
  {...props}
    placeholder='Search'
    placeholderTextColor={COLORS.WHITE}
    style={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        fontSize: 16,
        borderColor: COLORS.WHITE,
        borderRadius: 6,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 20,
        height: 40,
        width: '90%',
        alignSelf: 'center',
    }}
  />
  )
}