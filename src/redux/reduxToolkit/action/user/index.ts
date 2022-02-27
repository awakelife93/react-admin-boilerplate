import { UserStoreType } from "@/redux/type";
import userWorker from "../../reducer/user";

export const initUserInfoAction = () => userWorker.actions.initUserInfo();

export const setUserInfoAction = (value: UserStoreType) =>
  userWorker.actions.setUserInfo(value);
