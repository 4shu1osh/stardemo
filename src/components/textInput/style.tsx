import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../utils/colors";
import FONTS from "../../utils/fonts";

const {width} = Dimensions.get('screen');


const styles = StyleSheet.create({
    input: {
        // height: 50,
        borderRadius: 6,
        width: width*0.89,
        borderColor: COLORS.WHITE,
        marginVertical: 7,
        fontFamily: FONTS.HELVETICA,
        fontSize: 16,
        paddingRight: 40,
    },
    errMsg: {
        color: COLORS.RED,
    },
 
})

export default styles;