import COLORS from '../../utils/colors';
const {width} = Dimensions.get('screen');
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 48,
    marginTop: 36,
    borderRadius: 6,
    marginBottom: 36,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  },
  label: {
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.BLACK,
  },
});

export default styles;
