import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {},
  backgroundImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  fiveLogo: {
    width: 300,
    position: 'absolute',
    resizeMode: 'contain',
  },
  starLogo: {
    height: 76,
    resizeMode: 'contain',
    top: 82,
    left: -87,
    position: 'absolute'

  },

  imgBorder: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
 
 
  
});
export default styles;
