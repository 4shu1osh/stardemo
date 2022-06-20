import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';

const {FONT} = STRINGS;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 20,
  },
  headerView: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 20,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 10,
    letterSpacing: 1

  },

  button: {
    height: 50,
    width: '100%',
    borderRadius: 6,
    marginTop: 26,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '900',
    color: COLORS.BLACK,
  },

  text: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FONT.HELVETICA,
  },

  info: {
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom: 10
  },

  time: {
    fontSize: 24,
    color: COLORS.WHITE,
  },

  backButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: 64,
    height: 48,
    borderRadius: 6,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    marginTop: 20,
    color: COLORS.BLUE,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
  },
  timer: {
    height: 24,
    width: 24,
  },
  bmx: {
    resizeMode: 'contain',
    height: height / 2.5,
  },
  editButton: {
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
export default styles;
