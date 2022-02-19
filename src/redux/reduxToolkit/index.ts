import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";

const store = configureStore({
  reducer: combineReducers({ reduxStore: reducers }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true",
});

export default store;
