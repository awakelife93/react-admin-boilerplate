import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { ContentsType } from "../../api/GetAPI/type";
import { ReduxActionType, UseReduxType, UserStoreType } from "../../redux/type";
import { ModalItem } from "../components/Modal/type";

export const ActionContext = createContext<ReduxActionType | null>(null);

const ActionProvider = ({ children, useRedux } : { children: React.ReactElement, useRedux: UseReduxType }) => {
  const {
    getContentsAction,
    initContentsAction,
    initShowModalAction,
    initUserInfoAction,
    setUserInfoAction,
    showModalAction
  } = require(`../../redux/${useRedux}/action`);
    
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