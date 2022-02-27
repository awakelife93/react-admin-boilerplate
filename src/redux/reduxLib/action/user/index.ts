import { ActionEnum, UserStoreType } from "@/redux/type";
import { initUserState } from "../../reducer/user/default";

export const initUserInfoAction = () => ({
  type: ActionEnum.SET_USER_INFO,
  value: initUserState.user,
});

export const setUserInfoAction = (value: UserStoreType) => ({
  type: ActionEnum.SET_USER_INFO,
  value,
});
