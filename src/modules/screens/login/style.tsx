import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';

const {width} = Dimensions.get('window');

const {FONT} = STRINGS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    padding: 20,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 16,
    fontStyle: 'italic',
    lineHeight: 40,
    letterSpacing: 1

  },
  forgotPassword: {
    color: COLORS.BLUE,
    fontSize: 16,
    fontFamily: FONT.HELVETICA,
    alignSelf: 'flex-end',
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 6,
    marginVertical: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '900',
    color: COLORS.GREY,
  },
  line: {
    width: width * 0.4,
    height: 1,
    backgroundColor: COLORS.GREY,
  },
  or: {
    color: COLORS.GREY,
    fontSize: 14,
    fontFamily: FONT.HELVETICA,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtn: {
    height: 50,
    width: '100%',
    marginTop: 36,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
  eye: {
    height: 50,
    width: 20,
    position: 'absolute',
    bottom: 8,
    right: 20,
    resizeMode: 'contain',
  },
});
export default styles;
