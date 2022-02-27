import { UserStoreType } from "@/redux/type";

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
