import { initUserState } from "../../reducer/user/default";
import { ActionEnum } from "../../type";

export const initUserInfoAction = () => ({
  type: ActionEnum.SET_USER_INFO,
  value: initUserState.user,
});

export const setUserInfoAction = (value: boolean) => ({
  type: ActionEnum.SET_USER_INFO,
  value,
});
