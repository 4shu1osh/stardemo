import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/colors';

const styles = StyleSheet.create({
  backButton: {
    width: 20,
    height: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  headerView: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLACK,
  },
  heading: {
    fontSize: 28,
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.WHITE,
  },
  banner: {
    width: 329,
    height: 106,
    marginBottom: 60,
    resizeMode: 'contain',
  },
  bannerView: {
    width: 329,
    height: 106,
    marginBottom: 40,
    alignItems: 'center',
  },
  selectedBanner: {
    height: 112,
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    alignItems: 'center',
    borderColor: COLORS.BLUE,
  },
  check: {
    right: 12,
    width: 20,
    height: 20,
    bottom: 80,
    resizeMode: 'contain',
    position: 'absolute',
  },
  bannerText: {
    top: 40,
    right: 90,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.WHITE,
    position: 'absolute',
  },
});

export default styles;
