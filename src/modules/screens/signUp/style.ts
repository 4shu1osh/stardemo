import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../utils/colors';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  headerView: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    lineHeight: 40,
  },
  forgotPassword: {
    color: '#44C2E3',
    fontSize: 16,
    fontFamily: 'Helvetica',
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
    color: '#606060',
  },
  line: {
    width: width * 0.4,
    height: 1,
    backgroundColor: '#606060',
  },
  or: {
    color: '#606060',
    fontSize: 14,
    fontFamily: 'Helvetica',
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
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'helvetica',
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
      marginBottom: 20
  }
});
export default styles;
