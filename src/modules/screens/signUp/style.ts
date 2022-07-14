import FONTS from '../../../utils/fonts';
import COLORS from '../../../utils/colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

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
    lineHeight: 40,
    letterSpacing: 1,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.WHITE,

  },
  forgotPassword: {
    fontSize: 16,
    color: COLORS.BLUE,
    alignSelf: 'flex-end',
    fontFamily: FONTS.HELVETICA,
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
    fontWeight: '900',
    color: COLORS.GREY,
    fontStyle: 'italic',
  },
  line: {
    height: 1,
    width: width * 0.4,
    backgroundColor: COLORS.GREY,
  },
  or: {
    fontSize: 14,
    color: COLORS.GREY,
    fontFamily: FONTS.HELVETICA,
  },
  rowView: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtn: {
    height: 50,
    width: '100%',
    marginTop: 20,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.WHITE,
    fontFamily: FONTS.HELVETICA,
  },
  eye: {
    bottom: 8,
    right: 20,
    width: 20,
    height: 50,
    position: 'absolute',
    resizeMode: 'contain',
  },
  signUpText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    color: COLORS.WHITE,
  },
  checkboxContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  terms: {
    color: COLORS.WHITE,
  },
  checkBox: {
    width: 18,
    height: 18,
    marginLeft: 3,
    marginRight: 11,
  },
  backButton: {
    width: 20,
    height: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});
export default styles;
