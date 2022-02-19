import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContentsType } from "../../../../api/GetAPI/type";
import { ContentsStoreType } from "../../../type";
import { initContentState } from "./default";

const slice = createSlice({
  name: "contents",
  initialState: initContentState,
  reducers: {
    initContents: (state: ContentsStoreType): ContentsStoreType => {
      state.contents = initContentState.contents;
      return initContentState;
    },
    getContents: (
      state: ContentsStoreType,
      action: PayloadAction<{ contents: ContentsType[] }>
    ): ContentsStoreType => {
      const { contents } = action.payload;

      state.contents = [...state.contents, ...contents];

      return state;
    },
  },
});

const contentsWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default contentsWorker;
