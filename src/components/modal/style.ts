import COLORS from "../../utils/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 300,
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
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 7,
  },
  rectangle: {
    height: 244,
    width: 328,
  },
  icon: {
    height: 30,
    width: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default styles;
