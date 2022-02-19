import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStoreType } from "../../../type";
import { initUserState } from "./default";

const slice = createSlice({
  name: "user",
  initialState: initUserState,
  reducers: {
    initUserInfo: (state: UserStoreType): UserStoreType => {
      state.user = initUserState.user;
      return state;
    },
    setUserInfo: (
      state: UserStoreType,
      action: PayloadAction<UserStoreType>
    ): UserStoreType => {
      const { user } = action.payload;

      state.user = user;

      return state;
    },
  },
});

const userWorker = {
  actions: slice.actions,
  reducer: slice.reducer,
};
export default userWorker;
