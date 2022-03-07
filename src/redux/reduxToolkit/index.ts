import { UnknownObject } from "@/common/type";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import reducers from "./reducer";

const store = (initialState: UnknownObject = {}) => {
  const _store = configureStore({
  reducer: combineReducers({ reduxStore: reducers }),
  preloadedState: initialState,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<unknown>) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true",
});

  return _store;
};

export default store;
