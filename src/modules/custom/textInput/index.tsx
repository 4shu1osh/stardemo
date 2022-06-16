import React from 'react';
import styles from './style';
import {TextInput, Text} from 'react-native-paper';
import COLORS from '../../../utils/colors';

export default function CustomTextInput(props: any) {
  let {rightComponent, error} = props;
  return (
    <>
      <TextInput
        {...props}
        mode="outlined"
        placeholderTextColor={COLORS.WHITE}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        theme={{
          dark: true,
          colors: {
            text: COLORS.BLUE,
            primary: COLORS.WHITE,
            placeholder:COLORS.WHITE,
            background:COLORS.BLACK,
            error: COLORS.WHITE,
          }
        }}
        style={styles.input}
      />
      {rightComponent && rightComponent()}
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </>
  );
}
