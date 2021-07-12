import { combineReducers } from "redux";
import treatmentReducer from "./treatment-reducer"
import authReducer from "./auth-reducer";
const rootReducer = combineReducers({
  treatmentReducer,
  authReducer
});

export default rootReducer;