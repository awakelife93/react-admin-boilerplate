import { combineReducers } from "@reduxjs/toolkit";
import contentsWorker from "./contents";
import globalWorker from "./global";
import themeWorker from "./theme";
import userWorker from "./user";

const reducers = combineReducers({
  contentsStore: contentsWorker.reducer,
  themeStore: themeWorker.reducer,
  globalStore: globalWorker.reducer,
  userStore: userWorker.reducer,
});

export default reducers;
