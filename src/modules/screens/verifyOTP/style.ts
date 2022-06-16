import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../utils/colors';
const {width, height} = Dimensions.get('screen');
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
    color: '#000',
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'helvetica',
  },

  info: {
    fontSize: 14,
    color: COLORS.WHITE,
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
    marginBottom: 10,
  },
  colView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: 64,
    height: 48,
    borderRadius: 6,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    marginTop: 35,
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
    width: width,
    height: height/2,
  },
  editButton: {
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
});
export default styles;
