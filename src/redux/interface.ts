import React from "react";
import { CSSProperties } from "styled-components";
import { ContentsIE } from "../api/GetAPI/interface";
export interface ActionIE {
  type: string;
  value: any;
}
export interface ContentsStoreIE {
  contents: ContentsIE[];
}
export interface ThemeStoreIE {
  isDarkMode: boolean;
}
export interface GlobalStoreIE {
  isShowAdContainer: boolean;
  modalItem: {
    isShowModal: boolean;
    children: React.FC<any>;
    childrenProps: any;
    style: CSSProperties;
    option: {
      dimClose: boolean;
      keyClose: boolean;
    };
  };
}
export interface UserStoreIE {
  user: {
    isLogin: boolean;
    info: {
      id: number;
      email: string;
      nickname: string;
    };
  };
}
export interface ReduxIE {
  reduxStore: {
    contentsStore: ContentsStoreIE;
    themeStore: ThemeStoreIE;
    globalStore: GlobalStoreIE;
    userStore: UserStoreIE;
  };
  initContentsAction: Function;
  getContentsAction: Function;
  initDarkModeAction: Function;
  setDarkModeAction: Function;
  initShowAdAction: Function;
  showAdAction: Function;
  initShowModalAction: Function;
  showModalAction: Function;
  setUserInfoAction: Function;
  initUserInfoAction: Function;
}
