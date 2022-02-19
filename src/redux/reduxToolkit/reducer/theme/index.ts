import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeStoreType } from "../../../type";
import { initThemeState } from "./default";

const slice = createSlice({
  name: "theme",
  initialState: initThemeState,
  reducers: {
    initDarkMode: (state: ThemeStoreType): ThemeStoreType => {
      state.isDarkMode = initThemeState.isDarkMode;
      return state;
    },
    setDarkMode: (
      state: ThemeStoreType,
      action: PayloadAction<{ isDarkMode: boolean }>
    ): ThemeStoreType => {
      const { isDarkMode } = action.payload;

      state.isDarkMode = isDarkMode;

      return state;
    },
  },
});

const themeWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default themeWorker;
