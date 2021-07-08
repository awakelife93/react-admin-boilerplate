import { combineReducers } from "redux";
import contentsStore from "./contents";
import themeStore from "./theme";
import globalStore from "./global";
import userStore from "./user";

export default combineReducers({
  contentsStore,
  themeStore,
  globalStore,
  userStore,
});
