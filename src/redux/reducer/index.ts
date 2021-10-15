import { combineReducers } from "redux";
import contentsStore from "./contents";
import globalStore from "./global";
import themeStore from "./theme";
import userStore from "./user";

export default combineReducers({
  contentsStore,
  themeStore,
  globalStore,
  userStore,
});
