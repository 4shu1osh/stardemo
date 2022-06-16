import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../utils/colors";

const {height, width} = Dimensions.get('screen');


const styles = StyleSheet.create({
    input: {
        height: 50,
        borderRadius: 6,
        width: width*0.90,
        borderColor: COLORS.WHITE,
        marginVertical: 7,
        fontFamily: 'helvetica',
        fontSize: 16,
        fontWeight: '600',
    },
    errMsg: {
        color: COLORS.RED,
    },
 
})

export default styles;