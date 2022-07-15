import FONTS from '../../../utils/fonts';
import COLORS from '../../../utils/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLACK,
  },
  headerView: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLACK,
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    letterSpacing: 1,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.WHITE,

  },

  button: {
    height: 50,
    width: '100%',
    marginTop: 26,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.BLACK,
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.WHITE,
    fontFamily: FONTS.HELVETICA,
  },

  info: {
    lineHeight: 20,
    marginBottom: 10,
    color: COLORS.WHITE,
  },

  time: {
    fontSize: 24,
    color: COLORS.WHITE,
  },

  backButton: {
    width: 20,
    height: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: 64,
    height: 48,
    fontSize: 24,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    fontWeight: '900',
    color: COLORS.BLUE,
    textAlign: 'center',
    borderColor: COLORS.WHITE,
  },
  timer: {
    width: 24,
    height: 24,
  },
  bmx: {
    resizeMode: 'contain',
    height: height / 2.5,
  },
  editButton: {
    fontWeight: 'bold',
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: COLORS.BLUE,
  },
});
export default styles;
