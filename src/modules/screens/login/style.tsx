import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginVertical: 16,
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
  },
  socialBtn: {
    height: 50,
    width: '100%',
    marginTop: 36
  },
  text: {
    color: '#fff',
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
  }
});
export default styles;
