import React from "react";
import { CSSProperties } from "styled-components";
import { ContentsType } from "../api/GetAPI/type";

export type ContentsStoreType = {
  contents: ContentsType[];
};

export type ThemeStoreType = {
  isDarkMode: boolean;
};

export type GlobalStoreType = {
  isShowAdContainer: boolean;
  modalItem: {
    isShowModal: boolean;
    children: React.FC<any>;
    childrenProps: any;
    style: CSSProperties;
    titleItem: {
      title: string;
      subTitle: string;
      titleStyle: {};
      subTitleStyle: {};
    };
    buttonItem: {
      title: string;
      next: Function;
      containerStyleItems: {
        hoverBackgroundColor?: string;
        defaultBackgroundColor?: string;
        activeBackgroundColor?: string;
      };
    }[];
    option: {
      dimClose: boolean;
      keyClose: boolean;
    };
  };
};

export type UserStoreType = {
  user: {
    isLogin: boolean;
    info: {
      userId: number;
      userEmail: string;
      userNickname: string;
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

/**
 * @description
 * Redux Action Type 정의
 */
export enum ActionEnum {
  SET_USER_INFO = "SET_USER_INFO",
  GET_CONTENTS = "GET_CONTENTS",
  SET_DARK_MODE = "SET_DARK_MODE",
  SET_AD_CONTAINER = "SET_AD_CONTAINER",
  SET_MODAL_ITEM = "SET_MODAL_ITEM",
}
