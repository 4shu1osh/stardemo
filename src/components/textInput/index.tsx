import React from 'react';
import styles from './style';
import COLORS from '../../utils/colors';
import {TextInput, Text} from 'react-native-paper';

export default function CustomTextInput(props: any) {
  let {rightComponent, error, style} = props;
  return (
    <React.Fragment>
      <TextInput
        {...props}
        mode="outlined"
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={COLORS.WHITE}
        theme={{
          dark: true,
          colors: {
            text: COLORS.BLUE,
            primary: COLORS.WHITE,
            placeholder: COLORS.WHITE,
            background: COLORS.BLACK,
            error: COLORS.WHITE,
          },
        }}
        style={[styles.input, style]}
      />
      {rightComponent && rightComponent()}
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </React.Fragment>
  );
}
