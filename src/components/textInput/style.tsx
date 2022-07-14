import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../utils/colors';
import FONTS from '../../utils/fonts';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderRadius: 6,
    paddingRight: 40,
    width: width * 0.89,
    marginVertical: 7,
    borderColor: COLORS.WHITE,
    fontFamily: FONTS.HELVETICA,
  },
  errMsg: {
    color: COLORS.RED,
  },
});

export default styles;
