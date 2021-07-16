import { combineReducers } from "redux";
import treatmentReducer from "./treatment-reducer"
import authReducer from "./auth-reducer";
import mqttReducer from "./mqtt-reducer";
const rootReducer = combineReducers({
  treatmentReducer,
  authReducer,
  mqttReducer
});

export default rootReducer;