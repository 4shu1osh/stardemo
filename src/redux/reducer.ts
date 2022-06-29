import { combineReducers } from "redux";
import signUpReducer from "../modules/screens/signUp/reducer";
import verificationReducer from "../modules/screens/verifyOTP/reducer";

const rootReducer = combineReducers({
    signUpReducer,
    verificationReducer
})

export default rootReducer;