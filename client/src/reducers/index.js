import { combineReducers } from "redux";
import userReducer from "./userReducer";
import clientReducer from "./clientReducer";
import shipmentReducer from "./shipmentReducer";
import statusReducer from "./statusReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  users: userReducer,
  logins: loginReducer,
  clients: clientReducer,
  shipments: shipmentReducer,
  statuses: statusReducer
});
