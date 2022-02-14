import { initUserState } from "../../reducer/user/default";
import { ActionEnum, UserStoreType } from "../../type";

export const initUserInfoAction = () => ({
  type: ActionEnum.SET_USER_INFO,
  value: initUserState.user,
});

export const setUserInfoAction = (value: UserStoreType) => ({
  type: ActionEnum.SET_USER_INFO,
  value,
});
