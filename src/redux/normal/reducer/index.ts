import { combineReducers } from "redux";
import globalStore from "./global";
import userStore from "./user";

export default combineReducers({
  globalStore,
  userStore,
});
