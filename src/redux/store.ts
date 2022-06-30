import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;