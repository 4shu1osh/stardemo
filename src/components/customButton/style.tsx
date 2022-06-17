const {width} = Dimensions.get('screen');
import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../utils/colors';

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 6,
    marginTop: 36,
    marginBottom: 36,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  },
  label: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '900',
    color: COLORS.BLACK,
  },
});

export default styles;
