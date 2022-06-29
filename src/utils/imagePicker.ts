import { View, Text } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker'

export default function imagePickerFunction(width: number, height: number, callbackFn: any) {
  return (
    ImagePicker.openPicker({
        width,
        height,
        cropping: true,
      })  .then(image => {
        callbackFn(image.path);
      })
      .catch(err => {
        console.log('ImageErr', err);
      })
  )
}