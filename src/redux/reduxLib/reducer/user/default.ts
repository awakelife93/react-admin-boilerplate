import { UserStoreType } from "../../../type";

export const initUserState: UserStoreType = {
  user: {
    isLogin: false,
    info: {
      userId: -1,
      userEmail: "",
      userNickname: "",
    },
  },
};
