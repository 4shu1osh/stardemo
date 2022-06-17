import COLORS from "../../utils/colors";
import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalStyle: {
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 7,
  },
  rectangle: {
    width: 368,
    resizeMode: 'center'
  },
  icon: {
    height: 30,
    width: 30,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default styles;
