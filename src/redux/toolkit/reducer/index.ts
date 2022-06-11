import { combineReducers } from "@reduxjs/toolkit";
import globalWorker from "./global";
import userWorker from "./user";

const reducers = combineReducers({
  globalStore: globalWorker.reducer,
  userStore: userWorker.reducer,
});

export default reducers;
