// initContentsAction,
//         getContentsAction,
//         initThemeAction,
//         setThemeAction,
//         initShowAdAction,
//         showAdAction,
//         initShowModalAction,
//         showModalAction,
//         setUserInfoAction,
//         initUserInfoAction,
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { ContentsType } from "../../api/GetAPI/type";
import {
  getContentsAction,
  initContentsAction, initShowModalAction,
  initUserInfoAction,
  setUserInfoAction, showModalAction
} from "../../redux/action";
import { ReduxActionType, UserStoreType } from "../../redux/type";
import { ModalItem } from "../components/Modal/type";

export const ActionContext = createContext<ReduxActionType | null>(null);

const ActionProvider = ({ children } : { children: React.ReactElement }) => {
  const dispatch = useDispatch();

  const _initContentsAction = () => {
    dispatch(initContentsAction());
  };

  const _getContentsAction = (value: ContentsType[]) => {
    dispatch(getContentsAction(value));
  };

  const _initShowModalAction = () => {
    dispatch(initShowModalAction());
  };

  const _showModalAction = (value: ModalItem) => {
    dispatch(showModalAction(value));
  };

  const _setUserInfoAction = (value: UserStoreType) => {
    dispatch(setUserInfoAction(value));
  }

  const _initUserInfoAction = () => {
    dispatch(initUserInfoAction());
  };

  return (
    <ActionContext.Provider
      value={{
        initContentsAction: _initContentsAction,
        getContentsAction: _getContentsAction,
        initShowModalAction: _initShowModalAction,
        showModalAction: _showModalAction,
        setUserInfoAction: _setUserInfoAction,
        initUserInfoAction: _initUserInfoAction,
      }}
    >
      {children}
    </ActionContext.Provider>
  )
};

export default ActionProvider;