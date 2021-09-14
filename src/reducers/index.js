import { combineReducers } from "redux";
import authReducer from "./auth";

const allReducers = combineReducers({
      logged_in: authReducer,
});

export default allReducers;

