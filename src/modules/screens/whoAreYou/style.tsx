import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/colors';
import FONTS from '../../../utils/fonts';

const styles = StyleSheet.create({
  backButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    padding: 20,
    alignItems: 'center'

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
  banner: {
      height: 106,
      width: 329,
      resizeMode: 'contain',
      marginBottom: 60,

  },
  bannerView: {

    height: 106,
    width: 329,
      marginBottom: 40,
      alignItems: 'center',


  },
  selectedBanner:{
    height: 112,
    paddingHorizontal: 2,
    borderColor: COLORS.BLUE,
    borderRadius: 10,
    paddingVertical: 2,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,

  },
  check: {
      height: 20,
      width: 20,
      position: 'absolute',
        resizeMode: 'contain',
        bottom: 80,
        right: 12
  },
  bannerText: {
    color: COLORS.WHITE,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
    position: 'absolute',
    top: 40,
    right: 90,
  }
});

export default styles;
