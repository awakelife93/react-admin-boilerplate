import { ContentsType } from "@/api/GetAPI/type";
import { ModalItem } from "@/common/components/Modal/type";

export type UseReduxType = "reduxLib" | "reduxToolkit";

export type ContentsStoreType = {
  contents: ContentsType[];
};

export type ThemeStoreType = {
  isDarkMode: boolean;
};

export type GlobalStoreType = {
  modalItem: ModalItem;
};

export type UserStoreType = {
  user: {
    isLogin: boolean;
    info: {
      userId: number;
      email: string;
      name: string;
    };
  };
};

export type StateType = {
  contentsStore: ContentsStoreType;
  themeStore: ThemeStoreType;
  globalStore: GlobalStoreType;
  userStore: UserStoreType;
};

export type ReduxStoreType = {
  reduxStore: StateType;
};

export type ReduxProviderActionType = {
  initContentsAction: VoidFunction;
  getContentsAction: (value: ContentsType[]) => void;
  initShowModalAction: VoidFunction;
  showModalAction: (value: ModalItem) => void;
  setUserInfoAction: (value: UserStoreType) => void;
  initUserInfoAction: VoidFunction;
};

/**
 * @description
 * Redux Action Type 정의
 */
export enum ActionEnum {
  SET_USER_INFO = "SET_USER_INFO",
  GET_CONTENTS = "GET_CONTENTS",
  SET_DARK_MODE = "SET_DARK_MODE",
  SET_MODAL_ITEM = "SET_MODAL_ITEM",
}
