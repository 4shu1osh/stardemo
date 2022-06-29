import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/fonts';


const {width} = Dimensions.get('window');

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
    lineHeight: 40,
    letterSpacing: 1

  },
  forgotPassword: {
    color: COLORS.BLUE,
    fontSize: 16,
    fontFamily: FONTS.HELVETICA,
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
    fontFamily: FONTS.HELVETICA,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  socialBtn: {
    height: 50,
    width: '100%',
    marginTop: 20,
    marginBottom: 16,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: FONTS.HELVETICA,
  },
  eye: {
    height: 50,
    width: 20,
    position: 'absolute',
    bottom: 8,
    right: 20,
    resizeMode: 'contain',
  },
  signUpText: {
    fontSize: 14,
    color: COLORS.WHITE,
    marginTop: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  terms: {
    color: COLORS.WHITE,
  },
  checkBox: {
    marginRight: 11,
    marginLeft: 3,
    width: 18,
    height: 18,
  },
  backButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
export default styles;
