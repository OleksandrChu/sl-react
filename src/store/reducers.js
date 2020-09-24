import {combineReducers} from "redux";
import {registerReducer} from "./registration/reducers";

export default combineReducers({
    registration: registerReducer
});