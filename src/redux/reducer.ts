import { combineReducers } from "redux";
import signUpReducer from "../modules/screens/signUp/reducer";

const rootReducer = combineReducers({
    signUpReducer,
})

export default rootReducer;